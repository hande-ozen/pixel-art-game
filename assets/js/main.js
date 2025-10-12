// Containers

const start = document.getElementById("page-home");
const elem_templates = document.getElementById("page-templates");
const game = document.getElementById("page-artboard");
const popUp = document.getElementById("pop-up");
const pixelBox = document.getElementById("pixelBox");
const palletteBox = document.getElementById("colorsBox");
const artboard = document.getElementById("artboard")

// Buttons

const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const replayBtn = document.getElementById("replayBtn");
const trashBtn = document.getElementById("trashBtn");
const btnPaletteLeft = document.getElementById("btnPaletteLeft");
const btnPaletteRight = document.getElementById("btnPaletteRight");
const thumbnails = document.getElementsByClassName("thumbnail");

//Game Logic

const templates = [];

let artboardWidth = 0; // Will be set when the artboard is opened
let selectedColor = "";
let selectedTemplateName = "";
let selectedTemplateConfig = null;
let selectedTemplatePixels = [];
let selectedBarFill = null; // Element
let drawing = false;

// ======================================================================= //

loadTemplates();

// ======================================================================= //

// Event Listeners

startBtn.onclick = startGame;
backBtn.onclick = goBack;
btnPaletteLeft.addEventListener("click", () => {
    palletteBox.scrollBy({ left: -87, behavior: "smooth" });
});
btnPaletteRight.addEventListener("click", () => {
    palletteBox.scrollBy({ left: 87, behavior: "smooth" });
});


// Initialize thumbnails
for (let i = 0; i < thumbnails.length; i++) {
    // Set finished image
    const templateName = thumbnails[i].getAttribute("data-template"); // ex. "creeper"
    const bitmisMi = localStorage.getItem(templateName + "_done"); // ex. 1, or null
    if (bitmisMi == 1) {
        const bitmisImg = thumbnails[i].getAttribute("data-finish-img");
        thumbnails[i].setAttribute("src", bitmisImg);
    }

    // Set click event
    thumbnails[i].addEventListener("click", () => {
        openArtboard(i, templateName);
    });
}

trashBtn.onclick = playAgain;

replayBtn.onclick = showClickHistory;

// ======================================================================= //

// Functions

function startGame() {
    start.classList.add("hidden");
    elem_templates.classList.remove("hidden");
}

function openArtboard(i, templateName) {
    // Set globale selected template name
    selectedTemplateName = templateName;
    const template =  templates.find((temp) => {
        return temp.config.name == templateName;
    });
    if(!template) {
        alert("Coming soon..");
        return;
    }
    selectedTemplateConfig = template.config;
    selectedTemplatePixels = template.pixels;

    // Set mode
    if (selectedTemplateConfig.mode == "light") {
        artboard.style.background = "#ffffff";
    } else if (selectedTemplateConfig.mode == "dark") {
        artboard.style.background = "#303030";
    }

    elem_templates.classList.add("hidden");
    game.classList.remove("hidden");
    artboardWidth = pixelBox.offsetWidth;


    if (localStorage.getItem(selectedTemplateName + "_done") == 1) {
        renderPixels(true);
        renderPalette(true);

        replayBtn.classList.remove("hidden");
        trashBtn.classList.remove("hidden");
    } else {
        renderPixels(false);
        renderPalette(false);
    }

}

function renderPixels(bitmisse) {
    // Ekrana pikselleri <div> olarak ekle
    pixelBox.innerHTML = ""; // Temizle
    for (let i = 0; i < selectedTemplatePixels.length; i++) {
        const pixel = document.createElement("div");
        pixel.style.width = artboardWidth / selectedTemplateConfig.width + "px";
        pixel.style.height = artboardWidth / selectedTemplateConfig.width + "px";
        if (bitmisse == true) {
            pixel.style.backgroundColor = selectedTemplatePixels[i];
        } else {
            pixel.style.backgroundColor = convertToGray(selectedTemplatePixels[i]);
            pixel.setAttribute("data-original-color", selectedTemplatePixels[i]);
        }
        for (let x = 0; x < selectedTemplateConfig.colors.length; x++) { // Renklerden birine eşitse}
            if (selectedTemplatePixels[i] == selectedTemplateConfig.colors[x] && !bitmisse) {
                pixel.textContent = x + 1;
                break;
            }
        }
        pixelBox.appendChild(pixel);
        pixel.addEventListener("mousedown", () => {
            if (pixel.classList.contains("enabled") == true) {
                selectPixel(i, true);
                drawing = true;
            }
        });
        pixel.addEventListener("mouseup", () => {
            drawing = false;
        });
        pixel.addEventListener("mouseenter", () => {
            if(drawing && pixel.classList.contains("enabled")) selectPixel(i, true);
        })
    }
}


function selectPixel(i, addHistory) {
    // Seçilen pikseli renk ile doldur
    const p = pixelBox.children[i];
    const gercekRenk = p.getAttribute("data-original-color");

    p.style.backgroundColor = gercekRenk;
    p.classList.remove("enabled");
    p.textContent = "";

    // hafizaya almak
    if (addHistory == true) {
        // into localStorage
        clickHistory(i);
        
        // fillBar
        const doluPixeller = Array.from(pixelBox.children).filter((pixel) => { return pixel.textContent == "" && pixel.getAttribute("data-original-color") == gercekRenk });
        const tumSeciliRenktekiPikseller = Array.from(pixelBox.children).filter((pixel) => { return pixel.getAttribute("data-original-color") == gercekRenk });
        const percentage = (doluPixeller.length / tumSeciliRenktekiPikseller.length) * 100;
        selectedBarFill.style.width = percentage + "%";
        if (percentage == 100) {
            colorFinished(selectedBarFill.parentElement.previousSibling, true);
        }
    }

    // Find the selected color index
    /* for (let x = 0; x < selectedTemplateConfig.colors.length; x++) {
        const seciliRenginYazisi = x + 1;
        const seciliRenginIndexi = x;

        if (selectedColor == selectedTemplateConfig.colors[seciliRenginIndexi]) {
            p.classList.add("filled" + seciliRenginIndexi);

            const barFill = document.getElementsByClassName("bar-fill")[seciliRenginIndexi];
            const tumSeciliRenktekiPikseller = [];
            const doluPixeller = [];

            for (let n = 0; n < pixelBox.children.length; n++) {
                if (pixelBox.children[n].textContent == seciliRenginYazisi) {
                    tumSeciliRenktekiPikseller.push(pixelBox.children[n]);
                } else if (pixelBox.children[n].classList.contains("filled" + seciliRenginIndexi)) {
                    tumSeciliRenktekiPikseller.push(pixelBox.children[n]);
                    doluPixeller.push(pixelBox.children[n]);
                }
            }

            const percentage = (doluPixeller.length / tumSeciliRenktekiPikseller.length) * 100;
            barFill.style.width = percentage + "%";
            if (percentage == 100) {
                colorFinished(seciliRenginIndexi, true);
            }
            break;
        }
    } */

}

function clickHistory(i) {
    const eskiDeger = localStorage.getItem(selectedTemplateName + "_history");

    if (eskiDeger == null) {
        localStorage.setItem(selectedTemplateName + "_history", i)
    } else {
        localStorage.setItem(selectedTemplateName + "_history", eskiDeger + "," + i)
    }
}

async function showClickHistory() {
    const isim = localStorage.getItem(selectedTemplateName + "_history")
    const array = isim.split(',');
    renderPixels(false)
    for (let x = 0; x < array.length; x++) {
        //const siradakiPixel = pixelBox.children[array[x]];
        selectPixel(array[x], false);
        
        // 25ms sleep
        await new Promise(res => setTimeout(res, 25));
    }
}

function renderPalette(bitmisse) {
    // Paleti renklerini renderla
    palletteBox.innerHTML = ""; // Temizle
    for (let i = 0; i < selectedTemplateConfig.colors.length; i++) {
        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");

        const colorNumberBox = document.createElement("div");
        colorNumberBox.classList.add("color-number-box");
        colorNumberBox.style.backgroundColor = selectedTemplateConfig.colors[i];

        if (!bitmisse) {
            colorNumberBox.textContent = i + 1;
            // Event listeners
            colorNumberBox.addEventListener("click", () => {
                selectColor(i);
            });
        }

        if (tooDark(selectedTemplateConfig.colors[i])) {
            colorNumberBox.style.color = "#ffffff";
        }

        const finishBar = document.createElement("div");
        finishBar.classList.add("finish-bar");
        //finishBar.classList.add("hidden");
        finishBar.style.visibility = "hidden";

        const barFill = document.createElement("div");
        barFill.classList.add("bar-fill");

        // ----

        finishBar.appendChild(barFill);
        colorBox.appendChild(colorNumberBox);
        colorBox.appendChild(finishBar);

        palletteBox.appendChild(colorBox);

        if (bitmisse) {
            colorFinished(colorNumberBox, false)
        }
    }
}

function goBack() {
    game.classList.add("hidden");
    elem_templates.classList.remove("hidden");
}

function selectColor(i) {
    const colorNumberBoxes = document.getElementsByClassName("color-number-box");
    const finishBars = document.getElementsByClassName("finish-bar");

    if (colorNumberBoxes[i].classList.contains("done") == false) {

        // Cleanup
        for (let n = 0; n < colorNumberBoxes.length; n++) {
            colorNumberBoxes[n].classList.remove("selected");
        }
        for (let n = 0; n < finishBars.length; n++) {
            //finishBars[n].classList.add("hidden");
            finishBars[n].style.visibility = "hidden";
        }

        // Show selected color and finish bar
        colorNumberBoxes[i].classList.add("selected");
        //finishBars[i].classList.remove("hidden");
        finishBars[i].style.visibility = "visible";

        // Highlight selected pixels
        const pixels = pixelBox.children;
        for (let p = 0; p < pixels.length; p++) {
            pixels[p].classList.remove("enabled");
            pixels[p].classList.remove("disabled");

            if (pixels[p].textContent == i + 1) {
                pixels[p].classList.add("enabled");
            } else if (pixels[p].textContent != "") {
                pixels[p].classList.add("disabled");
            }
        }

        selectedColor = selectedTemplateConfig.colors[i];
    }

    selectedBarFill = finishBars[i].children[0];
}

function colorFinished(colorBox, checkAllFinished) {
    const colorNumberBoxes = [...document.getElementsByClassName("color-number-box")];
    colorBox.classList.add("done");

    colorBox.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';

    // Check if all done
    if (checkAllFinished == true && !colorNumberBoxes.find((box) => box.classList.contains("done") == false))
        allFinished();
}

function allFinished() {
    console.log("Tebrikler, hepsini bitirdiniz!");
    replayBtn.classList.remove("hidden");
    trashBtn.classList.remove("hidden");
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    localStorage.setItem(selectedTemplateName + "_done", 1);


    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
    showPopUp();
    setTimeout(() => {
        hidePopUp();
    }, 3000);
}

function showPopUp() {
    popUp.classList.remove("hidden");
    // Biraz gecikmeli class ekleyerek animasyonu tetikle
    setTimeout(() => {
        popUp.classList.add("show");
    }, 10);
}

function hidePopUp() {
    popUp.classList.remove("show");
    setTimeout(() => {
        popUp.classList.add("hidden");
    }, 500);
}

function playAgain() {
    const cevap = confirm("Are you sure you want to delete your work?");
    if (cevap) {
        renderPixels();
        renderPalette();
        localStorage.removeItem(selectedTemplateName + "_done");
        localStorage.removeItem(selectedTemplateName + "_history");
        replayBtn.classList.add("hidden");
        trashBtn.classList.add("hidden");
    }
}

function loadTemplates() {
    for(const thumb of thumbnails) {
        if(thumb.getAttribute("data-file")) {
            const js = document.createElement("script");
            js.src = thumb.getAttribute("data-file");
            document.head.appendChild(js);
        }
    }
}

// ============================= HELPER FUNCTIONS =========================================


function tooDark(hexColor) {
    const hex = hexColor.substring(1);      // strip #
    const rgb = parseInt(hex, 16);   // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff;  // extract red
    const g = (rgb >> 8) & 0xff;  // extract green
    const b = (rgb >> 0) & 0xff;  // extract blue

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    if (luma < 40) {
        return true;
    }
    else {
        return false;
    }
}

function convertToGray(hexColor) {
    const hex = hexColor.substring(1);      // strip #
    const rgb = parseInt(hex, 16);   // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff;  // extract red
    const g = (rgb >> 8) & 0xff;  // extract green
    const b = (rgb >> 0) & 0xff;  // extract blue

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    if (luma <= 125) {
        return "#7D7D7D";
    }

    else if (luma >= 213) {
        return "#D5D5D5";
    }
    else { return "#A4A4A4" }
}
// Containers

const start = document.getElementById("page-home");
const templates = document.getElementById("page-templates");
const game = document.getElementById("page-artboard");
const popUp = document.getElementById("pop-up");
const pixelBox = document.getElementById("pixelBox");
const palletteBox = document.getElementById("colorsBox");

// Buttons

const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const replayBtn = document.getElementById("replayBtn");
const trashBtn = document.getElementById("trashBtn");
const btnPaletteLeft = document.getElementById("btnPaletteLeft");
const btnPaletteRight = document.getElementById("btnPaletteRight");
const thumbnails = document.getElementsByClassName("thumbnail");

//Game Logic

let artboardWidth = 0; // Will be set when the artboard is opened
let selectedColor = "";
let selectedTemplate = "";

// ======================================================================= //

const creeperConfig = {
    width: 8,
    height: 8,
    colors: ["#70C47A", "#C6FFA8", "#000000"]
};

const creeper = [
    "#70C47A",
    "#70C47A",
    "#C6FFA8",
    "#C6FFA8",
    "#70C47A",
    "#70C47A",
    "#70C47A",
    "#C6FFA8",

    "#70C47A",
    "#70C47A",
    "#C6FFA8",
    "#70C47A",
    "#C6FFA8",
    "#C6FFA8",
    "#70C47A",
    "#70C47A",

    "#C6FFA8",
    "#000000",
    "#000000",
    "#70C47A",
    "#70C47A",
    "#000000",
    "#000000",
    "#70C47A",

    "#70C47A",
    "#000000",
    "#000000",
    "#C6FFA8",
    "#70C47A",
    "#000000",
    "#000000",
    "#70C47A",

    "#C6FFA8",
    "#70C47A",
    "#70C47A",
    "#000000",
    "#000000",
    "#C6FFA8",
    "#C6FFA8",
    "#70C47A",

    "#70C47A",
    "#C6FFA8",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#70C47A",
    "#C6FFA8",

    "#C6FFA8",
    "#70C47A",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#C6FFA8",
    "#70C47A",

    "#70C47A",
    "#C6FFA8",
    "#000000",
    "#70C47A",
    "#70C47A",
    "#000000",
    "#C6FFA8",
    "#70C47A",
]

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

// ======================================================================= //

// Functions

function startGame() {
    start.classList.add("hidden");
    templates.classList.remove("hidden");
}

function openArtboard(i, templateName) {
    // Set globale selected template name
    selectedTemplate = templateName;

    templates.classList.add("hidden");
    game.classList.remove("hidden");
    artboardWidth = pixelBox.offsetWidth;


    if (localStorage.getItem(selectedTemplate + "_done") == 1) {
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
    for (let i = 0; i < creeper.length; i++) {
        const pixel = document.createElement("div");
        pixel.style.width = artboardWidth / creeperConfig.width + "px";
        pixel.style.height = artboardWidth / creeperConfig.width + "px";
        if (bitmisse == true) {
            pixel.style.backgroundColor = creeper[i];
        } else {
            pixel.style.backgroundColor = convertToGray(creeper[i]);
        }
        for (let x = 0; x < creeperConfig.colors.length; x++) { // Renklerden birine eşitse}
            if (creeper[i] == creeperConfig.colors[x] && !bitmisse) {
                pixel.textContent = x + 1;
                break;
            }
        }
        pixelBox.appendChild(pixel);
        pixel.addEventListener("click", () => {
            selectPixel(i);
        });
    }
}


function selectPixel(i) {
    // Seçilen pikseli renk ile doldur
    const p = pixelBox.children[i];
    if (p.classList.contains("enabled") == true) {
        p.style.backgroundColor = selectedColor;
        p.classList.remove("enabled");
        p.textContent = "";

        // TODO: -hafizaya almak
        clickHistory(i);


        // Find the selected color index
        for (let x = 0; x < creeperConfig.colors.length; x++) {
            const seciliRenginYazisi = x + 1;
            const seciliRenginIndexi = x;

            if (selectedColor == creeperConfig.colors[seciliRenginIndexi]) {
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
        }
    }


}

function clickHistory(i) {
    const eskiDeger = localStorage.getItem(selectedTemplate + "_history");

    if (eskiDeger == null) {
        localStorage.setItem(selectedTemplate + "_history", i)
    } else {
        localStorage.setItem(selectedTemplate + "_history", eskiDeger + "," + i)
    }
}

function renderPalette(bitmisse) {
    // Paleti renklerini renderla
    palletteBox.innerHTML = ""; // Temizle
    for (let i = 0; i < creeperConfig.colors.length; i++) {
        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");

        const colorNumberBox = document.createElement("div");
        colorNumberBox.classList.add("color-number-box");
        colorNumberBox.style.backgroundColor = creeperConfig.colors[i];

        if (!bitmisse) {
            colorNumberBox.textContent = i + 1;
            // Event listeners
            colorNumberBox.addEventListener("click", () => {
                selectColor(i);
            });
        }

        if (tooDark(creeperConfig.colors[i])) {
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
            colorFinished(i, false)
        }
    }
}

function goBack() {
    game.classList.add("hidden");
    templates.classList.remove("hidden");
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

        selectedColor = creeperConfig.colors[i];
    }
}

function colorFinished(i, checkAllFinished) {
    //const colorNumberBoxes = [...document.getElementsByClassName("color-number-box")];
    const colorNumberBoxes = Array.from(document.getElementsByClassName("color-number-box")); // find() fonksiyonu icin GERCEK array lazim
    colorNumberBoxes[i].classList.add("done");

    colorNumberBoxes[i].innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';

    // Check if all done

    let herhangiBitmeyenVarMi = false;
    /* for (let n = 0; n < colorNumberBoxes.length; n++) {
        if(colorNumberBoxes[n].classList.contains("done") == false) {
            herhangiBitmeyenVarMi = true;
            break;
        }
    }

    if (herhangiBitmeyenVarMi == false) {
        allFinished();
    } */

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

    localStorage.setItem(selectedTemplate + "_done", 1);


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
        localStorage.removeItem(selectedTemplate + "_done")
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
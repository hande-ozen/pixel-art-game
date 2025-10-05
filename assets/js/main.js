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
const btnPaletteLeft = document.getElementById("btnPaletteLeft");
const btnPaletteRight = document.getElementById("btnPaletteRight");
const thumbnails = document.getElementsByClassName("thumbnail");

//Game Logic

let artboardWidth = 0; // Will be set when the artboard is opened

// ======================================================================= //

const creeperConfig = {
    width: 8,
    height: 8,
    colors: ["#70C47A", "#C6FFA8", "#000000",]
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
replayBtn.onclick = replayGame;
btnPaletteLeft.onclick = scrollPaletteLeft;
btnPaletteRight.onclick = scrollPaletteRight;

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].onclick = openArtboard;
}

// ======================================================================= //

// Functions

function startGame() {
    start.classList.add("hidden");
    templates.classList.remove("hidden");
}

function openArtboard() {
    templates.classList.add("hidden");
    game.classList.remove("hidden");
    artboardWidth = pixelBox.offsetWidth;

    renderPixels();
    renderPalette();
}

function renderPixels() {
    // Ekrana pikselleri <div> olarak ekle
    pixelBox.innerHTML = ""; // Temizle
    for (let i = 0; i < creeper.length; i++) {
        const pixel = document.createElement("div");
        pixel.style.width = artboardWidth / creeperConfig.width + "px";
        pixel.style.height = artboardWidth / creeperConfig.width + "px";
        pixel.style.backgroundColor = convertToGray(creeper[i]);
        for (let x = 0; x < creeperConfig.colors.length; x++) { // Renklerden birine eşitse}
            if (creeper[i] == creeperConfig.colors[x]) {
                pixel.textContent = x + 1;
            }
        }
        pixelBox.appendChild(pixel);
    }
}

/* function renderPalette() { 
    // Paleti renklerini renderla
    palletteBox.innerHTML = ""; // Temizle
    for (let i = 0; i < creeperConfig.colors.length; i++) {
        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");

        const colorNumberBox = document.createElement("div");
        colorNumberBox.classList.add("color-number-box");
        colorNumberBox.style.backgroundColor = creeperConfig.colors[i];
        colorNumberBox.textContent = i + 1;

        const finishBar = document.createElement("div");
        finishBar.classList.add("finish-bar");

        const barFill = document.createElement("div");
        barFill.classList.add("bar-fill");

        // ----

        finishBar.appendChild(barFill);
        colorBox.appendChild(colorNumberBox);
        colorBox.appendChild(finishBar);

        palletteBox.appendChild(colorBox);
    }
} */

// Easier way
function renderPalette() {
    palletteBox.innerHTML = ""; // Temizle
    for (let i = 0; i < creeperConfig.colors.length; i++) {
        let textColor = "#000000";
        if (tooDark(creeperConfig.colors[i])) {
            textColor = "#ffffff";
        }
        const htmlString = `
        <div class="color-box">
            <div class="color-number-box" style="background-color: ${creeperConfig.colors[i]}; color: ${textColor}">${i + 1}</div>
            <div class="finish-bar">
                <div class="bar-fill"></div>
            </div>
        </div>
        `;
        palletteBox.innerHTML += htmlString;
    }
}


function goBack() {
    game.classList.add("hidden");
    templates.classList.remove("hidden");
}

function replayGame() { }

function scrollPaletteLeft() { }

function scrollPaletteRight() { }

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

    else if ( luma >= 213) { 
        return "#D5D5D5";
    }
    else { return "#A4A4A4"}
}
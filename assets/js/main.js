// Containers

const start = document.getElementById("page-home");
const templates = document.getElementById("page-templates");
const game = document.getElementById("page-artboard");
const popUp = document.getElementById("pop-up");
const pixelBox = document.getElementById("pixelBox");

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
    console.log("Artboard Width: " + artboardWidth);
    renderPixels();
}

function renderPixels() {
    // Ekrana pikselleri <div> olarak ekle
    pixelBox.innerHTML = ""; // Temizle
    for (let i = 0; i < creeper.length; i++) {
        const pixel = document.createElement("div");
        pixel.style.width = artboardWidth / creeperConfig.width + "px";
        pixel.style.height = artboardWidth / creeperConfig.width + "px";
        pixel.style.backgroundColor = creeper[i];
        pixelBox.appendChild(pixel);
    }
}


function goBack() {
    game.classList.add("hidden");
    templates.classList.remove("hidden");
}

function replayGame() { }

function scrollPaletteLeft() { }

function scrollPaletteRight() { }

//

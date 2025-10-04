// Containers

const start = document.getElementById("page-home");
const templates = document.getElementById("page-templates");
const game = document.getElementById("page-artboard");
const popUp = document.getElementById("pop-up");

// Buttons

const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const replayBtn = document.getElementById("replayBtn");
const btnPaletteLeft = document.getElementById("btnPaletteLeft");
const btnPaletteRight = document.getElementById("btnPaletteRight");
const thumbnails = document.getElementsByClassName("thumbnail");

console.log(thumbnails);

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
}

function goBack() {
    game.classList.add("hidden");
    templates.classList.remove("hidden");
}

function replayGame() {}

function scrollPaletteLeft() {}

function scrollPaletteRight() {}

//

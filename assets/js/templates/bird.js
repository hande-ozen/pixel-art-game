//Bird 10x15

const birdConfig = {
    name: "bird",
    width: 10,
    height: 15,
    mode: "light",
    colors: ["#000000", "#ACAAAD", "#FFFFFF", "#89C8FF", "#FFDC4B", "#70C47A", "#0C1B68", "#CF151B"]
};

const bird = [
    "", "", "", "", "", "", "#CF151B", "#CF151B", "#CF151B", "",
    "", "", "", "", "", "#CF151B", "#FFFFFF", "#FFFFFF", "#CF151B", "#CF151B",
    "", "", "", "", "", "#CF151B", "#FFFFFF", "#000000", "#ACAAAD", "#ACAAAD",
    "", "", "", "", "", "#CF151B", "#FFFFFF", "#FFFFFF", "#ACAAAD", "#ACAAAD",
    "", "", "", "", "#CF151B", "#CF151B", "#CF151B", "#FFFFFF", "#000000", "#ACAAAD",
    "", "", "", "", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "", "",
    "", "", "", "#CF151B", "#FFDC4B", "#FFDC4B", "#CF151B", "#CF151B", "", "",
    "", "", "#CF151B", "#FFDC4B", "#FFDC4B", "#FFDC4B", "#FFDC4B", "#CF151B", "#CF151B", "",
    "", "#CF151B", "#FFDC4B", "#FFDC4B", "#FFDC4B", "#FFDC4B", "#89C8FF", "#CF151B", "#CF151B", "",
    "", "#FFDC4B", "#70C47A", "#70C47A", "#70C47A", "#89C8FF", "#CF151B", "#CF151B", "", "",
    "", "#70C47A", "#70C47A", "#0C1B68", "#0C1B68", "#89C8FF", "#CF151B", "#CF151B", "", "",
    "#70C47A", "#0C1B68", "#0C1B68", "#89C8FF", "#89C8FF", "#CF151B", "#CF151B", "", "", "",
    "#0C1B68", "#89C8FF", "#89C8FF", "#89C8FF", "#CF151B", "", "#ACAAAD", "#ACAAAD", "#ACAAAD", "",
    "#CF151B", "#CF151B", "#89C8FF", "", "", "", "", "", "", "",
    "#CF151B", "", "", "", "", "", "", "", "", "",
]

if (templates) {
    templates.push({
        config: birdConfig,
        pixels: bird
    });
    console.log(birdConfig.name + " injected");
} else console.log("couldn't inject " + birdConfig.name);
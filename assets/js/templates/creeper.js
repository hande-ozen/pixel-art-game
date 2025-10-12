const creeperConfig = {
    name: "creeper",
    width: 8,
    height: 8,
    mode: "light",
    colors: ["#70C47A", "#C6FFA8", "#000000"]
};

const creeper = [
    "#70C47A", "#70C47A", "#C6FFA8", "#C6FFA8", "#70C47A", "#70C47A", "#70C47A", "#C6FFA8",
    "#70C47A", "#70C47A", "#C6FFA8", "#70C47A", "#C6FFA8", "#C6FFA8", "#70C47A", "#70C47A",
    "#C6FFA8", "#000000", "#000000", "#70C47A", "#70C47A", "#000000", "#000000", "#70C47A",
    "#70C47A", "#000000", "#000000", "#C6FFA8", "#70C47A", "#000000", "#000000", "#70C47A",
    "#C6FFA8", "#70C47A", "#70C47A", "#000000", "#000000", "#C6FFA8", "#C6FFA8", "#70C47A",
    "#70C47A", "#C6FFA8", "#000000", "#000000", "#000000", "#000000", "#70C47A", "#C6FFA8",
    "#C6FFA8", "#70C47A", "#000000", "#000000", "#000000", "#000000", "#C6FFA8", "#70C47A",
    "#70C47A", "#C6FFA8", "#000000", "#70C47A", "#70C47A", "#000000", "#C6FFA8", "#70C47A",
]

if (templates) {
    templates.push({
        config: creeperConfig,
        pixels: creeper
    });
    console.log(creeperConfig.name + " injected");
} else console.log("couldn't inject " + creeperConfig.name);
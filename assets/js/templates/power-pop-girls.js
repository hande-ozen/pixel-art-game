//PowerPopGirls 11x7

const powerPopGirlsConfig = {
    name: "power-pop-girls",
    width: 11,
    height: 7,
    mode: "dark",
    colors: ["#FFDC4B", "#FFFFFF", "#89C8FF", "#0C1B68", "#000000", "#FEDAC4"]
};

const powerPopGirls = [
    "", "#FFDC4B", "#FFDC4B", "", "", "", "", "",  "#FFDC4B", "#FFDC4B", "",
    "#FFDC4B", "#FFDC4B", "#0C1B68", "#FFDC4B", "#FFDC4B", "#FFDC4B", "#FFDC4B", "#FFDC4B", "#0C1B68", "#FFDC4B", "#FFDC4B",
    "", "", "#FFDC4B", "#FFDC4B", "#FFDC4B", "#FFDC4B", "#FFDC4B", "#FFDC4B", "#FFDC4B", "", "",
    "", "", "#FFFFFF", "#89C8FF", "#000000", "#FEDAC4", "#000000", "#89C8FF", "#FFFFFF", "", "",
    "", "", "#89C8FF", "#000000", "#FFFFFF", "#FEDAC4", "#FFFFFF", "#000000", "#89C8FF", "", "",
    "", "", "#FFFFFF", "#89C8FF", "#000000", "#FEDAC4", "#000000", "#89C8FF", "#FFFFFF", "", "",
    "", "", "", "#FEDAC4", "#FEDAC4", "#FEDAC4", "#FEDAC4", "#FEDAC4", "", "", "",
]   

if (templates) {
    templates.push({
        config: powerPopGirlsConfig,
        pixels: powerPopGirls
    });
    console.log(powerPopGirlsConfig.name + " injected");
} else console.log("couldn't inject " + powerPopGirlsConfig.name);
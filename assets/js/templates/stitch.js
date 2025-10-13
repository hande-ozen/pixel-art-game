//Stitch 16x14

const stitchConfig = {
    name: "stitch",
    width: 16,
    height: 14,
    mode: "light",
    colors: ["#FFC7D3", "#89C8FF", "#000000", "#FFFFFF", "#5278AE", "#0C1B68"]
};

const stitch = [
    "", "#5278AE", "#5278AE", "", "", "", "", "", "", "", "", "", "", "#5278AE", "#5278AE", "",
    "#5278AE", "#FFC7D3", "#FFC7D3", "#5278AE", "", "", "", "", "", "", "", "", "#5278AE", "#FFC7D3", "#FFC7D3", "#5278AE",
    "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#5278AE", "", "", "", "", "", "", "#5278AE", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FFC7D3",
    "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#5278AE", "", "", "", "", "", "", "#5278AE", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FFC7D3",
    "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FFC7D3",
    "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FFC7D3",
    "#FFC7D3", "#FFC7D3", "#FFC7D3", "#5278AE", "#89C8FF", "#89C8FF", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#89C8FF", "#89C8FF", "#5278AE", "#FFC7D3", "#FFC7D3", "#FFC7D3",
    "#FFC7D3", "#FFC7D3", "#5278AE", "#89C8FF", "#000000", "#000000", "#89C8FF", "#5278AE", "#5278AE", "#89C8FF", "#000000", "#000000", "#89C8FF", "#5278AE", "#FFC7D3", "#FFC7D3",
    "#FFC7D3", "#FFC7D3", "#5278AE", "#89C8FF", "#000000", "#FFFFFF", "#89C8FF", "#5278AE", "#5278AE", "#89C8FF", "#FFFFFF", "#000000", "#89C8FF", "#5278AE", "#FFC7D3", "#FFC7D3",
    "", "#FFC7D3", "#5278AE", "#89C8FF", "#000000", "#000000", "#89C8FF", "#5278AE", "#5278AE", "#89C8FF", "#000000", "#000000", "#89C8FF", "#5278AE", "#FFC7D3", "",
    "", "", "#5278AE", "#89C8FF", "#000000", "#000000", "#89C8FF", "#0C1B68", "#0C1B68", "#89C8FF", "#000000", "#000000", "#89C8FF", "#5278AE", "", "",
    "", "", "#5278AE", "#5278AE", "#89C8FF", "#89C8FF", "#89C8FF", "#0C1B68", "#0C1B68", "#89C8FF", "#89C8FF", "#89C8FF", "#5278AE", "#5278AE", "", "",
    "", "", "", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "#5278AE", "", "", "",
    "", "", "", "", "#89C8FF", "#89C8FF", "#89C8FF", "#89C8FF", "#89C8FF", "#89C8FF", "#89C8FF", "#89C8FF", "", "", "", "",
]

if (templates) {
    templates.push({
        config: stitchConfig,
        pixels: stitch
    });
    console.log(stitchConfig.name + " injected");
} else console.log("couldn't inject " + stitchConfig.name);
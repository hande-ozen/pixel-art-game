//Heart Poison 13x18

const heartPoisonConfig = {
    name: "heart-poison",
    width: 13,
    height: 18,
    mode: "light",
    colors: ["#AD7544", "#000000", "#ACAAAD", "#FFC7D3", "#FEDAC4", "#E7E7E7", "#FF538F", "#FFFFFF"]
};

const heartPoison = [
    "", "", "", "", "#000000", "#000000", "#000000", "#000000", "#000000", "", "", "", "",
    "", "", "", "#000000", "#AD7544", "#AD7544", "#AD7544", "#AD7544", "#AD7544", "#000000", "", "", "",
    "", "", "#000000", "#E7E7E7", "#AD7544", "#AD7544", "#AD7544", "#AD7544", "#AD7544", "#ACAAAD", "#000000", "",  "", 
    "", "", "#000000", "#E7E7E7", "#FEDAC4", "#AD7544", "#AD7544", "#AD7544", "#FEDAC4", "#ACAAAD", "#000000", "", "", 
    "", "", "", "#000000", "#E7E7E7", "#FEDAC4", "#FEDAC4", "#FEDAC4", "#ACAAAD", "#000000", "", "", "",
    "", "", "", "", "#000000", "#ACAAAD", "#ACAAAD", "#ACAAAD", "#000000", "", "", "", "",
    "", "", "#000000", "#000000", "#000000", "#E7E7E7", "#ACAAAD", "#ACAAAD", "#000000", "#000000", "#000000", "", "",
    "", "#000000", "#E7E7E7", "#E7E7E7", "#E7E7E7", "#E7E7E7", "#E7E7E7", "#ACAAAD", "#ACAAAD", "#ACAAAD", "#ACAAAD", "#000000", "",
    "#000000", "#E7E7E7", "#E7E7E7", "#FF538F", "#FF538F", "#E7E7E7", "#E7E7E7", "#E7E7E7", "#FF538F", "#FF538F", "#ACAAAD", "#ACAAAD", "#000000",
    "#000000", "#E7E7E7", "#FF538F", "#FFFFFF", "#FFC7D3", "#FF538F", "#E7E7E7", "#FF538F", "#FFC7D3", "#FFC7D3", "#FF538F", "#ACAAAD", "#000000",
    "#000000", "#E7E7E7", "#FF538F", "#FFC7D3", "#FFFFFF", "#FFC7D3", "#FF538F", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FF538F", "#ACAAAD", "#000000",
    "#000000", "#E7E7E7", "#FF538F", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FF538F", "#ACAAAD", "#000000",
    "", "#000000", "#E7E7E7", "#FF538F", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FF538F", "#ACAAAD", "#000000", "",
    "", "", "#000000", "#E7E7E7", "#FF538F", "#FFC7D3", "#FFC7D3", "#FFC7D3", "#FF538F", "#ACAAAD", "#000000", "", "",
    "", "", "", "#000000", "#E7E7E7", "#FF538F", "#FFC7D3", "#FF538F", "#ACAAAD", "#000000", "", "", "",
    "", "", "", "", "#000000", "#E7E7E7", "#FF538F", "#ACAAAD", "#000000", "", "", "", "",
    "", "", "", "", "", "#000000", "#E7E7E7", "#000000", "", "", "", "", "",
    "", "", "", "", "", "", "#000000", "", "", "", "", "", "",
]

if (templates) {
    templates.push({
        config: heartPoisonConfig,
        pixels: heartPoison
    });
    console.log(heartPoisonConfig.name + " injected");
} else console.log("couldn't inject " + heartPoisonConfig.name);
//Unicorn 12x12

const unicornConfig = {
    name: "unicorn",
    width: 12,
    height: 12,
    mode: "dark",
    colors: ["#FF538F", "#FFDC4B", "#C6FFA8", "#FB99AE", "#FFFFFF", "#89C8FF", "#000000", "#9762D9", "#FFC7D3"]
};

const unicorn = [
    "", "", "", "#FF538F", "", "", "", "", "", "", "", "",
    "", "", "", "#FF538F", "", "#FB99AE", "#FB99AE", "", "", "", "", "",
    "", "#FFDC4B", "#C6FFA8", "#FF538F", "#FFDC4B", "#FFDC4B", "#FFFFFF", "#FB99AE", "", "", "", "",
    "#FFDC4B", "#C6FFA8", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FB99AE", "", "", "", "",
    "", "", "#FFFFFF", "#000000", "#FFFFFF", "#FFFFFF", "#FB99AE", "#89C8FF", "", "", "", "",
    "", "#FFFFFF", "#FFFFFF", "#000000","#FFFFFF", "#FFFFFF", "#89C8FF", "#9762D9", "", "#FFDC4B", "#FFDC4B", "",
    "", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#89C8FF", "#9762D9", "", "#FFDC4B", "#C6FFA8", "#C6FFA8", "#FFDC4B",
    "", "", "", "", "#89C8FF", "#9762D9", "#FFFFFF", "#FFFFFF", "#C6FFA8", "#FFDC4B", "#FFDC4B", "#C6FFA8",
    "", "", "", "", "#9762D9", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FB99AE", "#FB99AE", "#FFDC4B",
    "", "", "", "", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#89C8FF", "#FB99AE", "#FFDC4B",
    "", "", "", "", "#FFFFFF", "#FFFFFF", "", "#FFFFFF", "#FFFFFF", "#9762D9", "#89C8FF", "#FFDC4B",
    "", "", "", "", "#FFC7D3", "#FFC7D3", "", "#FFC7D3", "#FFC7D3", "", "#9762D9", "#89C8FF",
];

if (templates) {
    templates.push({
        config: unicornConfig,
        pixels: unicorn
    });
    console.log(unicornConfig.name + " injected");
} else console.log("couldn't inject " + unicornConfig.name);
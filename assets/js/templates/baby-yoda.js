//BabyYoda 17x16

const babyYodaConfig = {
    name: "baby-yoda",
    width: 17,
    height: 16,
    mode: "dark",
    colors: ["#4C413B", "#FFFFFF", "#CF151B", "#9FC691", "#7FAC73"]
};

const babyYoda = [
    "", "", "", "", "", "", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "", "", "", "", "", "",
    "", "", "", "", "", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "", "", "", "", "",
    "", "", "", "", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "", "", "", "", "",
    "", "", "", "#CF151B", "#CF151B", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "", "", "", "", "",
    "", "", "", "#CF151B", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "", "", "", "",
    "", "", "", "#CF151B", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#FFFFFF", "", "", "", "",
    "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691",
    "", "#9FC691", "#7FAC73", "#7FAC73", "#9FC691", "#4C413B", "#4C413B", "#9FC691", "#9FC691", "#9FC691", "#4C413B", "#4C413B", "#9FC691", "#7FAC73", "#7FAC73", "#9FC691", "",
    "", "", "#9FC691", "#7FAC73", "#9FC691", "#4C413B", "#4C413B", "#9FC691", "#9FC691", "#9FC691", "#4C413B", "#4C413B", "#9FC691", "#7FAC73", "#9FC691", "", "", "",
    "", "#FFFFFF", "#FFFFFF", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "#9FC691", "", "", "",
    "", "", "#FFFFFF", "#FFFFFF", "", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "", "", "", "", "",
    "", "", "", "", "", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "", "", "", "", "",
    "", "", "", "", "", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "", "", "", "", "",
    "", "", "", "", "", "#9FC691", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "#9FC691", "", "", "", "", "",
    "", "", "", "", "", "", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "", "", "", "", "",
    "", "", "", "", "", "", "", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "#CF151B", "", "", "", "", "",
]

if (templates) {
    templates.push({
        config: babyYodaConfig,
        pixels: babyYoda
    });
    console.log(babyYodaConfig.name + " injected");
} else console.log("couldn't inject " + babyYodaConfig.name);
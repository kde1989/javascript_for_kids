let speak = function() {
    console.log(this.sound + "! Меня зовут " + this.name + "!");
};

let cat = {
    sound: "Мяу",
    name: "Варежка",
    speak: speak
};
let pig = {
    sound: "Хрю",
    name: "Чарли",
    speak: speak
};
let horse = {
    sound: "И-го-го",
    name: "Мэри",
    speak: speak
};
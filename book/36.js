let counter = 5;

let printMessage = function() {
    console.log("Ты смотришь в консоль уже " + counter + " секунд!");
    counter+=5;
};

let intervalID = setInterval(printMessage, 5000);
clearTimeout(intervalID);
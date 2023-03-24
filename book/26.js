let words = ["программа", "макака", "прекрасный", "оладушек", "бензовоз", "электростанция", "крот"];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for(let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;
let attempts = 3;
while(remainingLetters > 0 && attempts > 0) {
    alert(answerArray.join(" "));
    let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
    guess = guess.toLowerCase();
    if(guess === null) {
        break;
    } else if(guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        let isCorrectAnswer = false;
        for(let j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
                isCorrectAnswer = true;
            }
        }
        if(!isCorrectAnswer) {
            attempts--;
            if(attempts === 0) {
                alert("Ваши попытки закончились.");
                break;
            } else {
                alert("У вас осталось " + attempts + " попытки.");
            }
        }
    }
}
alert(answerArray.join (" "));
alert ("Отлично! Было загадано слово " + word);
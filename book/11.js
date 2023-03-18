var randomBodyParts = ["рот", "ухо", "волосы"];
var randomAdjectives = ["смешная", "огромная", "склизкая"];
var randomWords = ["слон", "муравей", "улитка", "какашка", "попа"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 5)];
var randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!" + " ;)";
randomInsult;
var randomBodyParts = ["рот", "нос", "глаз"];
var randomAdjectives = ["смешной", "огромный", "вонючий"];
var randomEnimals = ["слона", "муравья", "слизняка", "дятла", "голубя"];
var randomBodyEnimals = ["хобот", "ус", "попа", "клюв", "хвост"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomEnimal = randomEnimals[Math.floor(Math.random() * 5)];
var randomBodyEnimal = randomBodyEnimals[Math.floor(Math.random() * 5)];
var randomInsult = ["У тебя",randomBodyPart,"ещё более",randomAdjective,",","чем",randomBodyEnimal,"у",randomEnimal,"!!!",";)"];
randomInsult.join(" ");

'У тебя рот ещё более смешной , чем хобот у дятла !!! ;)'
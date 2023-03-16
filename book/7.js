var myString = "эЙ, кАК деЛа?";
var myStringLower = myString.toLowerCase();
var myLetterUpper = myStringLower[0].toUpperCase();
var myStringSlice = myStringLower.slice(1);
myLetterUpper + myStringSlice;
'Эй, как дела?'

var myString2 = "эЙ, кАК деЛа?";
myString2[0].toUpperCase() + myString2.slice(1).toLowerCase();
'Эй, как дела?'
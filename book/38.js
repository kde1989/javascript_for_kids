let dog = {
    name: "Оладушек",
    legs: 4,
    isAwesome: true
};
dog.age = 6;
dog.bark = function () {
    console.log("Гав-гав! Меня зовут " + this.name + "!");
};
dog.bark();
VM549:2 Гав-гав! Меня зовут Оладушек!
let areArraysSame = function (number1, number2) {
    if (number1.length !== number2.length) {
        return false;
    };
    for (let i = 0; i < number1.length; i ++) {
        if (number1[i] !== number2[i]) {
            return false;
        }
    }
    return true;
};
areArraysSame([1, 2, 3], [1, 2, 3]);
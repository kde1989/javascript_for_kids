let medalForScore = function (score) {
    if (score < 3) {
        return "Бронзовый";
    }
    if (score < 7) {
        return "Серебрянный";
    }
    return "Золотая";
};
medalForScore(10);
let EURRatios = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const EURToUSD = (value) => value * EURRatios.USD
const EURToJPY = (value) => value * EURRatios.JPY
const EURToGBP = (value) => value * EURRatios.GBP

module.exports = {
    EURToUSD,
    EURToJPY,
    EURToGBP
}
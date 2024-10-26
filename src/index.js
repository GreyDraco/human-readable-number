module.exports = function toReadable(number) {
    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teenNumbers = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const largeNumbers = ["hundred", "thousand", "million"];

    if (number === 0) {
        return numbers[0];
    } else if (number < 10) {
        return numbers[number];
    } else if (number < 20) {
        return teenNumbers[number - 10];
    } else if (number < 100) {
        const tensPart = tens[Math.floor(number / 10) - 2];
        const units = number % 10 ? " " + numbers[number % 10] : "";
        return tensPart + units;
    } else if (number < 1000) {
        const hundreds = numbers[Math.floor(number / 100)] + " hundred";
        const remainder = number % 100;
        if (remainder) {
            return hundreds + " " + toReadable(remainder);
        }
        return hundreds;
    }
    return "";
};

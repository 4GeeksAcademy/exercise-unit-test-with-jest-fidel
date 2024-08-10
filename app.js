// app.js file content

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return Number(valueInDollar);
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to yen
    let valueInYen = valueInDollar * 146.67;
    // return the yen value
    return Number(valueInYen.toFixed(3));
}

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.0054;
    // return the dollar value
    return Number(valueInPound);
}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
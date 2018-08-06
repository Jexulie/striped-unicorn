var generator = require('./lib/generator');;

/**
 * Random String Generator Genie.
 * @author Jexulie <fejitj3n@yahoo.com>
 * @param {number} length length of output.
 * @param {string} option "N" -> Numeric | "A" -> Alpha | "S" ->  Symbol | And Their Combinations.
 * @returns {string} rndString
 */
function StripedUnicorn(length, option){
    switch(option){
        case "N":
            return generator.genNumeric(length);
        case "A":
            return generator.genAlpha(length);
        case "S":
            return generator.genSymbol(length);
        case "NA":
        case "AN":
            return generator.genNumericAndAlpha(length);
        case "NS":
        case "SN":
            return generator.genNumericAndSymbol(length);
        case "AS":
        case "SA":
            return generator.genAlphaAndSymbol(length);
        case "NAS":
        case "NSA":
        case "SAN":
        case "SNA":
        case "ASN":
        case "ANS":
            return generator.genAll(length);
        default:
            console.error('Select an Option and Must Be All Uppercase.');
    }
}

module.exports = StripedUnicorn;
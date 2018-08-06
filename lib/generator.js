// Constants
var ALPHA = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
var NUMERIC = '1234567890';
var SYMBOL = '!@#$%^&*-_=+';

// export it
module.exports = {
    genAlpha: genAlpha,
    genNumeric: genNumeric,
    genSymbol: genSymbol,
    genNumericAndAlpha: genNumericAndAlpha,
    genNumericAndSymbol: genNumericAndSymbol,
    genAlphaAndSymbol: genAlphaAndSymbol,
    genAll: genAll
};

/**
 * @param {string} len
 * @returns {string} rndNum
 */
function PseudoRandomness(len){
    return Math.floor(Math.random() * len)
}

/**
 * A
 * @param {string} len
 * @returns {string} result
 */
function genAlpha(len){
    var res = "";
    for(var o = 0; o <= len; o++){
        res += ALPHA.charAt(PseudoRandomness(ALPHA.length));
    }
    return res;

}

/**
 * N
 * @param {string} len
 * @returns {string} result
 */
function genNumeric(len){
    var res = "";
    for(var o = 0; o <= len; o++){
        res += NUMERIC.charAt(PseudoRandomness(NUMERIC.length))   
    }
    return res;
}

/**
 * S
 * @param {string} len
 * @returns {string} result
 */
function genSymbol(len){
    var res = "";
    for(var o = 0; o <= len; o++){
        res += SYMBOL.charAt(PseudoRandomness(SYMBOL.length))   
    }
    return res;
}

/**
 * NA
 * @param {string} len
 * @returns {string} result
 */
function genNumericAndAlpha(len){
    var res = "";
    for(var o = 0; o <= len; o++){
        var R = Math.ceil(Math.random() * 10);
        if(R >= 5){
            res += ALPHA.charAt(PseudoRandomness(ALPHA.length));
        }else{
            res += NUMERIC.charAt(PseudoRandomness(NUMERIC.length))  
        }
    }
    return res
}

/**
 * NS
 * @param {string} len
 * @returns {string} result
 */
function genNumericAndSymbol(len){
    var res = "";
    for(var o = 0; o <= len; o++){
        var R = Math.ceil(Math.random() * 10);
        if(R >= 5){
            res += SYMBOL.charAt(PseudoRandomness(SYMBOL.length));
        }else{
            res += NUMERIC.charAt(PseudoRandomness(NUMERIC.length))  
        }
    }
    return res
}

/**
 * AS
 * @param {string} len
 * @returns {string} result
 */
function genAlphaAndSymbol(len){
    var res = "";
    for(var o = 0; o <= len; o++){
        var R = Math.ceil(Math.random() * 10);
        if(R >= 5){
            res += ALPHA.charAt(PseudoRandomness(ALPHA.length));
        }else{
            res += SYMBOL.charAt(PseudoRandomness(SYMBOL.length))  
        }
    }
    return res
}

/**
 * NAS
 * @param {string} len
 * @returns {string} result
 */
function genAll(len){
    var res = "";
    for(var o = 0; o <= len; o++){
        var R = Math.ceil(Math.random() * 10);
        if(R >= 7){
            res += ALPHA.charAt(PseudoRandomness(ALPHA.length));
        }else if(R <= 3){
            res += NUMERIC.charAt(PseudoRandomness(NUMERIC.length))  
        }else{
            res += SYMBOL.charAt(PseudoRandomness(SYMBOL.length)) 
        }
    }
    return res
}

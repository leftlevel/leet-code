/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    num = +Math.abs(x).toString().split('').reverse().join('')
    if (num > Math.pow(2, 31) - 1 || num < Math.pow(-2, 31)) return 0
    return x < 0 ? -num : +num 
};
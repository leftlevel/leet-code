/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0 || (x > 0 && x % 10 === 0)) return false
    num = +x.toString().split('').reverse().join('')
    if (num === x) return true
    else return false
};
console.log(isPalindrome(61));
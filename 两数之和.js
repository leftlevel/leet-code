/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    num = +Math.abs(x).toString().split('').reverse().join('')
    if (num > Math.pow(2, 31) - 1 || num < Math.pow(-2, 31)) return 0
    return x < 0 ? -num : +num 
};

var reverse2 = function(x) {
    let res = 0
    while (x) {
        res = res * 10 + x % 10
        if (Math.abs(res) > Math.pow(2, 31)) return 0
        // 因为 js 没有 int 类型 x / 10 会产生小数问题所以需要取整
        // 可以使用 ~~ 符号 或者 parseInt 方法
        // 一个～是按位取反，两个～～是直接去掉小数点后面的内容
        // 而且～～不会改变数字的正负，这一点比Math.floor()强不少
        x = parseInt(x / 10)
    }
    return res
};

console.log(Math.floor(-3.4));
console.log(~~(-3.4));
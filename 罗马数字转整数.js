/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romanObj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let sArr = s.split('')

    let res = 0
    for (let i = 0; i < sArr.length; i++) {
        let item = romanObj[sArr[i]]
        if (romanObj[sArr[i]] < romanObj[sArr[i + 1]]) {
            res += romanObj[sArr[i + 1]] - item
            i++
        } else {
            res += item
        }
    }
    return res
};

// 字符串也能像数组方式访问
console.log('object'[3]);

// 答案题解
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt1 = function (s) {
    const table = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let sum = 0;
    let pre = table[s[0]];
    for (let i = 1; i < s.length; i++) {
        let cur = table[s[i]];
        if (pre < cur) {
            sum -= pre;
        } else {
            sum += pre;
        }
        pre = cur;
    }
    sum += pre;
    return sum;
};
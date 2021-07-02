/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let res = []
    if (strs.length === 0) return ''
    if (strs.length === 1) return strs[0]
    
    // 利用 sort 函数对 strs 进行一次按字母排序
    let sortArr = strs.sort()
    // 只需比较第一个元素和最后一个元素的最长公共前缀，拿到的就是最终结果
    let firstArr = sortArr[0].split('')
    let lastArr = sortArr[sortArr.length - 1].split('')
    if (!firstArr || !lastArr) return ''
    for (let i = 0; i < lastArr.length; i++) {
        if (lastArr[i] === firstArr[i]) {
            res.push(lastArr[i])
        } else {
            break
        }
    }
    return res.join('')
};

console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log([1, 4, 3, 4, 3].toString().split(',').sort());
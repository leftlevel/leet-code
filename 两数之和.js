/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let arr = []
    for (index = 0; index < nums.length; index++) {
        let res = arr.findIndex(item => item === nums[index])
        if (res > -1) return [res, index]
        arr[index] = target - nums[index]
    }
};
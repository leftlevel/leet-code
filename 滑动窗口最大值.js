/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let res = []
    let window = []
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i]
        window.push(item)
        if (window.length > k) {
            window.shift()
        }
        if (window.length >= k) {
            res.push(Math.max(...window))
        }
    }
    return res
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))


var maxSlidingWindow1 = function (nums, k) {
    // 存放队列元素的下标
    let window = []
    let res = []
    for (let index = 0; index < nums.length; index++) {
        if (index - k >= window[0] && index + 1 > k) {
            window.shift()
        }
        while (window.length !== 0 && nums[window[window.length - 1]] <= nums[index]) {
            window.pop()
        }
        window.push(index)
        // 达到窗口大小时就向结果添加数据
        if (index >= k - 1) {
            res.push(nums[window[0]])
        }
    }
    return res
}
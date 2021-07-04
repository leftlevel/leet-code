/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) return false
    let res = head
    let map = new Map
    let ans = false
    while (res) {
        if (map.has(res)) {
            ans = true
            res = null
        } else {
            map.set(res, 1)
            res = res.next
        }
    }
    return ans
};

var hasCycle1 = function (head) {
    while (head) {
        if (head.cycle) {
            return true
        } else {
            head.cycle = 1
            head = head.next
        }
    }
    return false
};

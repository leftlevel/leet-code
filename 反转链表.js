/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) { // 时间复杂度O(2n) 递归取出再写入
    let newList = {}
    let arr = []
    if (!head) return null
    function getNode(list) {
        if (list != null) {
            arr.push(list.val)
            getNode(list.next)
        }
    }
    getNode(head)

    function addNode(index) {
        if (index >= 0) {
            return {
                val: arr[index],
                next: addNode(index - 1)
            }
        } else {
            return null
        }
    }
    newList = addNode(arr.length - 1)
    return newList
};

console.log(reverseList({
    "val": 1,
    "next": {
        "val": 2,
        "next": {
            "val": 3,
            "next": {
                "val": 4,
                "next": {
                    "val": 5,
                    "next": null
                }
            }
        }
    }
}));

// 更好的答案
var newReverseList2 = function (head) {
    if (!head || !head.next) return null
    var cur = head;
    var pre = null;
    while (cur) {
        var next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next
    }
    return pre
};

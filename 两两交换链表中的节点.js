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
var swapPairs = function (head) {
    if (!head || !head.next) return head
    let dummy = head.next
    if (dummy.next) dummy.next = swapPairs(dummy.next)
    head.next = dummy.next
    dummy.next = head
    head = dummy
    return head
};

var swapPairs1 = function(head) {
    if (!head || !head.next) return head
    let newHead = head.next
    head.next = swapPairs1(head.next.next)
    newHead.next = head
    return newHead
};

console.log(swapPairs1({
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
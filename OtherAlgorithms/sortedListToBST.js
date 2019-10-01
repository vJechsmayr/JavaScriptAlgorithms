/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function sortedListToBST(head) {
    if (!head) {
        return null;
    }

    function toBst(head, tail) {
        var slow = head;
        var fast = head;
        if (head == tail) {
            return null;
        }

        while (fast != tail && fast.next != tail) {
            fast = fast.next.next;
            slow = slow.next;
        }

        var treeHead = new TreeNode(slow.val);
        treeHead.left = toBst(head, slow);
        treeHead.right = toBst(slow.next, tail);
        return treeHead;
    }

    return toBst(head, null);
};

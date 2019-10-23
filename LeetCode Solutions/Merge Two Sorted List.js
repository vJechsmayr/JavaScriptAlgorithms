function mergeTwoSortedLists (l1, l2) {

    let mergedLinkedListHead = { val : -1, next : null }; // create dummy node to get started
    let runner = mergedLinkedListHead;

    while(l1 && l2) {
        if(l1.val > l2.val) {
            runner.next = l2;
            l2 = l2.next;
        } else {
            runner.next = l1;
            l1 = l1.next;
        }
        runner = runner.next;
    }

    // l1 = 1->2->3, l2 = 10->20->30
    // In that case l1, will point to null and while loop will break
    // Simply point runner to l2. We do not have to add individual nodes
    runner.next = l1 || l2;

    return mergedLinkedListHead.next;
}
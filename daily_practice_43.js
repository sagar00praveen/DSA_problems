function kthSmallest(root, k) {
  let stack = [], curr = root;
  while (curr || stack.length) {
    while (curr) { stack.push(curr); curr = curr.left; }
    curr = stack.pop();
    k--;
    if (k === 0) return curr.val;
    curr = curr.right;
  }
}
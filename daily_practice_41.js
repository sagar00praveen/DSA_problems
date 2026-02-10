function levelOrder(root) {
  let res = [], q = [root];
  while (q[0]) {
    let len = q.length, level = [];
    for (let i = 0; i < len; i++) {
      let curr = q.shift();
      level.push(curr.val);
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    res.push(level);
  }
  return res;
}
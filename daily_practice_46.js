function lastStoneWeight(stones) {
  stones.sort((a,b)=>a-b);
  while(stones.length > 1){
    let y = stones.pop(), x = stones.pop();
    if(x !== y) { stones.push(y-x); stones.sort((a,b)=>a-b); }
  }
  return stones[0] || 0;
}
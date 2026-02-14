class MinHeap {
  constructor() { this.heap = []; }
  push(val) { this.heap.push(val); this.bubbleUp(this.heap.length - 1); }
  pop() { let min = this.heap[0]; this.heap[0] = this.heap.pop(); this.bubbleDown(0); return min; }
  bubbleUp(i) { while (i > 0) { let p = Math.floor((i - 1) / 2); if (this.heap[p] <= this.heap[i]) break; [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]]; i = p; } }
  bubbleDown(i) { /* Omitted full implementation for brevity */ }
}
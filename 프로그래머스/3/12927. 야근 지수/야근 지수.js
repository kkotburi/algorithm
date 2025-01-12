class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(n) {
    this.heap.push(n);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    let root = this.heap[0];
    const lastNode = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);

      if (this.heap[index] <= this.heap[parentIdx]) break;
      this.swap(index, parentIdx);
      index = parentIdx;
    }
  }

  heapifyDown() {
    let index = 0;

    while (true) {
      let biggest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (
        this.heap[leftChildIndex] &&
        this.heap[leftChildIndex] > this.heap[biggest]
      ) {
        biggest = leftChildIndex;
      }

      if (
        this.heap[rightChildIndex] &&
        this.heap[rightChildIndex] > this.heap[biggest]
      ) {
        biggest = rightChildIndex;
      }
      if (biggest === index) break;

      this.swap(index, biggest);
      index = biggest;
    }
  }
}

const solution = (n, works) => {
  const sortedWorks = works.sort((a, b) => b - a);
  const len = sortedWorks.length;
  let answer = 0;
  const heap = new MaxHeap();

  for (let i = 0; i < len; i++) {
    heap.push(sortedWorks[i]);
  }

  for (let i = 0; i < n; i++) {
    let big = heap.pop();

    if (big === 0) return 0;
    heap.push(big - 1);
  }

  for (let i = 0; i < len; i++) {
    answer += heap.pop() ** 2;
  }

  return answer;
};
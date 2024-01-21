console.log("Heap (max and min)");

class MinHeap {
    constructor(heap = [null]) {
        this.heap = heap;
    }

    insert(num) {
        this.heap.push(num);
        if (this.heap.length > 2) {
            let currentIndex = this.heap.length - 1;
            while (this.heap[currentIndex] < this.heap[Math.floor(currentIndex / 2)]) {
                if (currentIndex >= 1) {
                    [this.heap[Math.floor(currentIndex / 2)], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[Math.floor(currentIndex / 2)]];
                    if (Math.floor(currentIndex / 2) > 1) {
                        currentIndex = Math.floor(currentIndex / 2);
                    } else {
                        break;
                    }
                }
            }
        }
    }

    remove() {
        let smallest = this.heap[1];
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);
            if (this.heap.length == 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallest;
            }
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]) {
                if (this.heap[left] < this.heap[right]) {
                    [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
                    i = 2 * i;
                } else {
                    [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
                    i = 2 * i + 1;
                }
                left = 2 * i;
                right = 2 * i + 1;
                if (this.heap[left] == undefined || this.heap[right] == undefined) {
                    break;
                }
            }
        } else if (this.heap.length == 2) {
            this.heap.splice(1, 1);
        } else {
            return null;
        }
        return smallest;
    }

    sort() {
        let result = new Array();
        while (this.heap.length > 1) {
            result.push(this.remove());
        }
        return result;
    }
}

class MaxHeap {
    constructor(heap = [null]) {
        this.heap = heap;
    }

    print = () => this.heap;

    insert(num) {
        this.heap.push(num);
        if (this.heap.length > 2) {
            let currentIndex = this.heap.length - 1;
            while (this.heap[currentIndex] > this.heap[Math.floor(currentIndex / 2)]) {
                if (currentIndex >= 1) {
                    [this.heap[Math.floor(currentIndex / 2)], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[Math.floor(currentIndex / 2)]];
                    if (Math.floor(currentIndex / 2) > 1) {
                        currentIndex = Math.floor(currentIndex / 2);
                    } else {
                        break;
                    }
                }
            }
        }
    }

    remove() {
        let largest = this.heap[1];
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);
            if (this.heap.length == 3) {
                if (this.heap[1] < this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return largest;
            }
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while (this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]) {
                if (this.heap[left] > this.heap[right]) {
                    [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
                    i = 2 * i;
                } else {
                    [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
                    i = 2 * i + 1;
                }
                left = 2 * i;
                right = 2 * i + 1;
                if (this.heap[left] == undefined || this.heap[right] == undefined) {
                    break;
                }
            }
        } else if (this.heap.length == 2) {
            this.heap.splice(1, 1);
        } else {
            return null;
        }
        return largest;
    }
}

console.log("Heap visualization");

// Usage example:

let minHeap = new MinHeap();
minHeap.insert(4);
minHeap.insert(2);
minHeap.insert(8);
minHeap.insert(1);
minHeap.insert(7);
console.log("MinHeap after insertion:", minHeap.heap);

let maxHeap = new MaxHeap();
maxHeap.insert(4);
maxHeap.insert(2);
maxHeap.insert(8);
maxHeap.insert(1);
maxHeap.insert(7);
console.log("MaxHeap after insertion:", maxHeap.heap);

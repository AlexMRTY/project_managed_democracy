interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    size(): number;
    peekQueue(): T[] | undefined;
    isEmpty(): boolean;
}

export class Queue<T> implements IQueue<T> {
    private storage: T[] = [];
    private capacity: number;
  
    constructor(capacity: number = Infinity) {
        this.capacity = capacity
    }
  
    enqueue(item: T): void {
      if (this.size() === this.capacity) {
        throw Error("Queue has reached max capacity, you cannot add more items");
      }
      this.storage.push(item);
    }
    dequeue(): T | undefined {
      return this.storage.shift();
    }
    size(): number {
      return this.storage.length;
    }
    peekQueue(): T[] | undefined {
        return Array.from(this.storage);
    }
    isEmpty(): boolean {
        return this.size() == 0 ? true : false;
    }
}

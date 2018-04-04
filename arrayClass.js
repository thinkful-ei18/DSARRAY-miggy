'use strict';
const Memory = require('./memory');
const memory = new Memory();
class Array{
  constructor(){
    this.length = 0;
    this.ptr = memory.allocate(this.length);
    this._capacity = 0;
  }
  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }
  _resize(size){
    const oldPtr = this.ptr;
    this.ptr=memory.allocate(size);
    if(this.pter === null){
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }
  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    this._capacity++;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
    this._capacity++;
  }
}

function main(){
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);
  console.log(arr);
  arr.push(6);
  console.log(arr);
  arr.pop();
  console.log(arr);
  arr.pop();
  console.log();
}


main();

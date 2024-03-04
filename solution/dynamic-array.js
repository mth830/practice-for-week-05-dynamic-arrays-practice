class DynamicArray {

  constructor(defaultSize = 4) {

    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;

  }

  read(index) {

    return this.data[index];
  }

  unshift(val) {

    if (this.length < this.capacity) {
      
      //if the length < capacity  shift everything to the right and add data at index 0
      for (let i = this.length; i >= 1; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.length++;
      this.data[0] = val;
    
      //if length is equal to the capacity make a new Array and copy contents 
      //shifted  then add data to index 0 and add data to index 0 and update capacity   
    }else if (this.length === this.capacity) {

      let arr = new Array(this.capacity + 1);

      for (let i = arr.length - 1; i >= 1; i--) {
        arr[i] = this.data[i - 1];
      }
      this.data = arr;

      this.data[0] = val;
      this.capacity += 1;
    }
    //update the length of the array 
    this.length += 1;
  }

}

/*let dyn = new DynamicArray();
dyn.unshift(1);
dyn.unshift(2);
dyn.unshift(3);
dyn.unshift(4);
dyn.unshift(5);
dyn.unshift(6);
console.log(dyn.data);*/
module.exports = DynamicArray;
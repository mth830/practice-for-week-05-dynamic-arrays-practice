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
    //if the length <capacity push shift everything anove move to the front


    if (this.length < this.capacity) {
      
      //if the length <capacity push shift everything anove move to the right
      for (let i = this.length; i >= 1; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.data[0] = val;
    
      //if length is equal to the capacity make a new Array and copy contents 
      //shifted    
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
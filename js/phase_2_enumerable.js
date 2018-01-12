
Array.prototype.myEach = function(callback) {
  let counter = 0;
  while(counter < this.length){
    callback(this[counter]);
    counter++;
  }
};


 function print(el) {
  console.log(el);
}

Array.prototype.myMap = function(callback) {
  let counter = 0;
  const result = [];
  while(counter < this.length){
    result.push(callback(this[counter]));
    counter++;
  }
  return result;
};


 function print(el) {
  console.log(el);
}
 function double(el) {
  return el * 2;
}

Array.prototype.myReduce = function(callback, initial) {
  if(typeof initial === 'undefined') {
    var acc = this[0];
    var counter = 1;
}
  else {
      acc = initial;
      counter = 0;
  }
  while(counter < this.length){
    acc = callback(acc, this[counter]);
    counter++;
  }
  return acc;
};

function add(acc, el) {
  return acc + el;
}


Array.prototype.bubbleSort = function() {

  let sorted = false;

  while(sorted == false) {
    sorted = true;
    this.forEach((el,idx) => {

      if(this[idx + 1] < el) {

        [this[idx],this[idx + 1]] = [this[idx +1],this[idx]];
        sorted = false;

      }
    });
  }

  return this;
};


String.prototype.subStrings = function() {
  let range = 2;
  const result = [];
  var stringArray = this.split("");

  while(range <= stringArray.length) {

    let chunk = [];
    let counter = 0;
    while(counter < stringArray.length) {
      let slice = stringArray.slice(counter, counter + range);

      if(!result.includes(slice.join(""))) {
        result.push(slice.join(""));
      }
      counter++;

    }
    range++;

  }
  return result;
};

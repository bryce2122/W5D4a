Array.prototype.unique = function() {
  const result = [];

  this.forEach(el => {

    if(!result.includes(el)){
      result.push(el);
    }
  });

  return result;

};


Array.prototype.twoSum = function(target) {
  const result = [];
  const sortedArray = this.sort((a, b) => a - b);
  let i = 0;
  let j = this.length - 1;
  console.log("SORTED");
 console.log(sortedArray);
  while(i < j) {
    console.log(i);
    console.log(j);
    let guess = sortedArray[i] + sortedArray[j];

    if(guess === target) {
      result.push([i,j]);
      i++;
    }

    else if (guess < target) {
      i++;
    }

    else {
      j--;
    }
  }

  return result;
};

let customSort = function() {
  const array = [1,2,3,5,-6,-7];
  array.sort((a, b) => {
    console.log("A");
    console.log(a);
    console.log("B");
    console.log(b);
    return (a - b);

  });
  return array;
};


Array.prototype.transpose = function() {
  const result = [];
  let counter = 0;
  const length = this[0].length;
  while (counter < length) {
    let chunk = [];
    this.forEach(el => {
      chunk.push(el[counter]);
    });

    counter++;
  result.push(chunk);

  }
  return result;
};

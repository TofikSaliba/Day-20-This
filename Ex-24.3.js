Array.prototype.myFilter = function (callBackFunc, newThis = this) {
  const filteredArr = [];
  for (let i = 0; i < newThis.length; i++) {
    //* check to see if the indexes exist
    if (newThis.hasOwnProperty(i)) {
      if (callBackFunc(newThis[i], i, newThis)) {
        filteredArr.push(newThis[i]);
      }
    }
  }
  return filteredArr;
};

Array.prototype.myFind = function (callBackFunc, newThis = this) {
  for (let i = 0; i < newThis.length; i++) {
    //* check to see if the indexes exist
    if (newThis.hasOwnProperty(i)) {
      if (callBackFunc(newThis[i], i, newThis)) {
        return newThis[i];
      }
    }
  }
  return undefined;
};

Array.prototype.myReduce = function (callBackFunc, initial) {
  let i, result;
  if (initial !== undefined) {
    result = initial;
    i = 0;
  } else {
    result = this[0];
    i = 1;
  }
  for (i; i < this.length; i++) {
    //* check to see if the indexes exist
    if (this.hasOwnProperty(i)) {
      result = callBackFunc(result, this[i], i, this);
    }
  }
  return result;
};

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const filterArr = arr.myFilter((el) => el > 60);
console.log("\nmyFilter\n", filterArr);

const findArr = arr.myFind((el) => el === 50);
console.log("\nmyFind\n", findArr);

const reduceArr = arr.myReduce((prev, curr) => prev + curr, 1000);
console.log("\nmyReduce\n", reduceArr);

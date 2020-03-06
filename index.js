function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach(element => {
    if (!Array.isArray(element)) {
      sum += element;
    } else {
      sum += sumItems(element);
    }
  });
  return sum;
}

console.log(sumItems([1,[2,[3,6,8,[1,2,3,[6,9]]],4,5]]));
module.exports = sumItems;
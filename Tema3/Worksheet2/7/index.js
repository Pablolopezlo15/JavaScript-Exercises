function setArrayToZeros(arr) {
  for (let i = 0; i < 10; i++) {
      arr[i] = 0;
  }
}

const myArray = [];
setArrayToZeros(myArray);
console.log(myArray); 


function addOneToEachElement(arr) {
  for (let i = 0; i < arr.length; i++) {
      arr[i] += 1;
  }
}


const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
addOneToEachElement(myArray2);
console.log(myArray2); 


function displayArrayValues(arr) {
  const result = arr.join(' ');
  console.log(result);
}

const myArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
displayArrayValues(myArray3);

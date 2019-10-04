const arr = [1, 2, 3, 4, 5];

const reverseOrder = arr => {
  const reverseArr = [];
  for (let k = 0; k < arr.length; k += 1) {
    const element = arr[k];
    reverseArr.unshift(element);
  }

  return reverseArr;
};

const coolReverseOrder = arr => arr.reverse();

// console.log(`function result: [${reverseOrder(arr)}], initial arr: [${arr}]`);

const validator = arr => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];

    if (element > 0) newArr.push(element);
  }

  return newArr;
};

const 

function mySort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let left = [];
  let right = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...mySort(left), pivot, ...mySort(right)];
}

console.log(mySort([3, 2, 30, -4, 9, 10, 7, 55, 12]));

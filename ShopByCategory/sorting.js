const arr = [
  {
    color: "white",
    price: 10,
  },
  {
    color: "blue",
    price: 3,
  },
  {
    color: "red",
    price: 20,
  },
];

arr.sort();
console.log(arr);

const normalArr = [10, 2, 5, 20];

// const updatedArr = normalArr.sort();
// console.log(updatedArr);

const updatedArr = normalArr.sort(function (a, b) {
  return a - b;
});
console.log(updatedArr);

let number_Array = [10, 20, 30];
let total = 0;
number_Array.forEach((element) => {
  total = total + element;
});
console.log("Cach 1: ", total);

// ham callback
function callback(currentTotal, currentValue, currentIndex) {
  console.log("--------------Lần lặp ", currentIndex + 1, "------------");
  console.log("currentTotal hiện tại: ", currentTotal);
  console.log("currentValue hiện tại: ", currentValue);
  console.log("currentIndex hiện tại: ", currentIndex);
  currentTotal = currentTotal + currentValue;
  return currentTotal;
}

let total_reduce = number_Array.reduce(callback, 0);
console.log("Cach 2", total_reduce);
// có thể sử dụng cách viết ngắn gọn hơn sử dụng arror function và bỏ param currentIndex do không cần dùng tới.
let total_reduce_other = number_Array.reduce(
  (currentTotal, currentValue) => currentTotal + currentValue,
  0
);
console.log(
  "----------CÁCH 3: Tối ưu cách viết, tổng các phần tử mảng là: ",
  total_reduce_other
);
// Không sử dụng initialValue.
let total_reduce_other_2 = number_Array.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(
  "----------CÁCH 4: không sử dụng initialValue, tổng các phần tử mảng là: ",
  total_reduce_other_2
);

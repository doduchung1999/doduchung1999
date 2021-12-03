function sum(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
console.log("------------ Demo cách gọi hàm như bình thường --------------");
var sum_a_b = sum(20, 30);
console.log(sum_a_b);
console.log("------------- Demo sử dụng HOF -----------------");
function caculate(a, b, operation) {
    var result = operation(a, b);
    console.log("Kết quả phép tính ", operation, " là ", result);
}
// sử dụng HOF
caculate(20, 10, minus);

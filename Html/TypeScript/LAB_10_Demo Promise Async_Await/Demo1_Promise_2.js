function callAPICreateAccount() {
    return new Promise(function (resolve, reject) {
        console.log("call API Create User!");
        resolve("Create User successfully!");
    });
}
// Viết theo cách mới, return ra luôn 1 promise mới.
function callAPICreateDepartment() {
    return new Promise(function (resolve, reject) {
        console.log("------ Step1: call API Create Department!------");
        resolve("Create Department successfully!");
        // reject("Department Name is Exists!");
    });
}
function callAPICreatePosition() {
    return new Promise(function (resolve, reject) {
        console.log("------ Step2: call API Create Position!------");
        resolve("Create Position successfully!");
        // reject("Position Name is Exists!");
    });
}
callAPICreateDepartment()
    .then(function (message) {
    console.log(message);
    return callAPICreatePosition(); // TH tạo Department thành công sẽ thực hiện gọi đến hàm tạo Position, hàm HOF
})
    .then(function (message) {
    console.log(message);
    return callAPICreateAccount(); // TH tạo cả dep và Pos thành công sẽ thực hiện gọi đến hàm tạo Account
})
    .then(function (message) {
    console.log(message);
})
    //   Trong trường hợp bất cứ 1 trong các hàm phía trên gặp lỗi sẽ thực hiện đoạn lệnh tron catch
    .catch(function (error) {
    console.log(error);
});

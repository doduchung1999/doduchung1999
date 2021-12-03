"use strict";
exports.__esModule = true;
var Worker_1 = require("./Worker");
//  Thử tạo ra các worker bằng cách gán các giá trị từ biến khai báo với Var
// Tạo worker1:
// Khai báo ra các biến lưu thông tin worker dùng var, ở đây thấy cấu trúc của Var khai báo khá cởi mở, không yêu cầu về kểu dữ liệu
var name = "Worker1";
var age = 18;
var gender = "Male";
var address;
address = "HN";
var rank = 7;
var worker1 = new Worker_1.Worker(name, age, gender, address, rank);
console.log("'Thông tin worker1'");
worker1.printInforWorker();
console.log('Thông tin worker1_ Sau khi khai báo biến var lại 1 lần nữa');
var worker1 = new Worker_1.Worker("Worker1_Name1", 20, "FeMale", "HN", 10);
worker1.printInforWorker();
// khai báo worker2
var worker2 = new Worker_1.Worker("Worker2_Name2", 22, "Male", "HN", 9);
console.log('In thông tin thông qua khai báo thêm 1 hàm: ');
function printWorker_array() {
    var workerArray;
    workerArray = [worker1, worker2];
    workerArray.forEach(function (element) {
        console.log(element);
    });
    worker2 = new Worker_1.Worker("Worker2_Name2_Change", 22, "Male_Change", "HN_Change", 9);
    var worker4 = new Worker_1.Worker("Worker3", 22, "Male", "HN", 9);
}
printWorker_array();
console.log("Thông tin Worker sau khi thay đổi trong hàm printWorker_array");
console.log(worker2);

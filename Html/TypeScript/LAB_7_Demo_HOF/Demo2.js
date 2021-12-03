"use strict";
exports.__esModule = true;
var Engineer_1 = require("./Engineer");
var Worker_1 = require("./Worker");
var Employee_1 = require("./Employee");
// Tạo ra các đối tượng
var worker1 = new Worker_1.Worker("Worker1", 20, "Male", "HN", 10);
var worker2 = new Worker_1.Worker("Worker2", 22, "FeMale", "NĐ", 7);
var worker3 = new Worker_1.Worker("Worker3", 24, "Male", "HN", 8);
var Engineer1 = new Engineer_1.Engineer("Engineer1", 20, "Male", "HN", "DEV");
var Engineer2 = new Engineer_1.Engineer("Engineer2", 22, "FeMale", "NĐ", "TEST");
var Engineer3 = new Engineer_1.Engineer("Engineer3", 24, "Male", "HN", "DEV");
var Employee1 = new Employee_1.Employee("Employee1", 20, "Male", "HN", "Task1");
var Employee2 = new Employee_1.Employee("Employee2", 22, "FeMale", "NĐ", "Task2");
var Employee3 = new Employee_1.Employee("Employee3", 24, "Male", "HN", "Task3");
var staffArray;
staffArray = [
    worker1,
    worker2,
    worker3,
    Engineer1,
    Engineer2,
    Engineer3,
    Employee1,
    Employee2,
    Employee3,
];
// viết hàm để inra thông tin worker
function printWorkerInfor(staffArray) {
    staffArray.forEach(function (element) {
        if (element instanceof Worker_1.Worker) {
            element.printInforWorker();
        }
        // console.log(element instanceof Worker);
    });
}
printWorkerInfor(staffArray);
// Cach 2: HOF
function printStaff(staffArray, function_print) {
    return function_print(staffArray);
}
console.log("Sử dụng HOF để tin thông tin");
printStaff(staffArray, printWorkerInfor);
// CÁCH 3: Viết hàm giá trị truyền vào là 1 object
console.log("Cach 3 ");
function printStaffArray(staffArray, params) {
    staffArray.forEach(function (element) {
        if (element instanceof params) {
            console.log(element);
        }
    });
}
printStaffArray(staffArray, Engineer_1.Engineer);

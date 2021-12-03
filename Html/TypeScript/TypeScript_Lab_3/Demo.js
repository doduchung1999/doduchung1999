"use strict";
exports.__esModule = true;
var Worker_1 = require("./Worker");
var Engineer_1 = require("./Engineer");
var Employee_1 = require("./Employee");
var worker1 = new Worker_1.Worker("Worker1", 20, "Male", "HN", 10); // Tạo mới 1 đối tượng Worker.
var worker2 = new Worker_1.Worker("Worker2", 22, "FeMale", "NĐ", 7);
var worker3 = new Worker_1.Worker("Worker3", 24, "Male", "HN", 8);
worker1.printInforWorker();
console.log("------------------Demo Array Worker ------------------");
var workerArray;
workerArray = [worker1, worker2, worker3];
console.log("----- Sử dụng ForEach để in thông tin Worker");
workerArray.forEach(function (element) {
    element.printInforWorker();
});
// Engineer
var Engineer1 = new Engineer_1.Engineer("Engineer1", 20, "Male", "HN", "DEV"); // Tạo mới 1 đối tượng Worker.
var Engineer2 = new Engineer_1.Engineer("Engineer2", 22, "FeMale", "NĐ", "TEST");
var Engineer3 = new Engineer_1.Engineer("Engineer3", 24, "Male", "HN", "DEV");
Engineer1.PrintInforEngineer();
console.log("------------------Demo Set Engineer ------------------");
var engineerSet = new Set();
engineerSet.add(Engineer1);
engineerSet.add(Engineer2);
engineerSet.add(Engineer3);
console.log("Total element of set: " + engineerSet.size);
engineerSet.forEach(function (element) {
    console.log(element);
});
console.log("Delete a element in set: " + engineerSet["delete"](Engineer3));
engineerSet.forEach(function (element) {
    console.log(element);
});
console.log("------------------Finish Demo Set ------------------");
// Employee
var Employee1 = new Employee_1.Employee("Employee1", 20, "Male", "HN", "Task1"); // Tạo mới 1 đối tượng Worker.
var Employee2 = new Employee_1.Employee("Employee2", 22, "FeMale", "NĐ", "Task2");
var Employee3 = new Employee_1.Employee("Employee3", 24, "Male", "HN", "Task3");
Employee1.printInforEmployee();
console.log("----------------- Demo For Of qua Array ------------------");
var EmployeeArray; // Khai báo 1 mảng
EmployeeArray = [Employee1, Employee2, Employee3];
// Sử dụng for of để in thông tin 
for (var _i = 0, EmployeeArray_1 = EmployeeArray; _i < EmployeeArray_1.length; _i++) {
    var element = EmployeeArray_1[_i];
    element.printInforEmployee();
}
console.log("------------------Finish Demo For of ------------------");

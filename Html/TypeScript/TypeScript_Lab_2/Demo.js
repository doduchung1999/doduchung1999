"use strict";
exports.__esModule = true;
var Account_1 = require("./Account");
var Department_1 = require("./Department");
var Possition_1 = require("./Possition");
// Department
var dep1 = new Department_1.Department(1, "Sale");
var dep2 = new Department_1.Department(2, "Kỹ thuật");
var dep3 = new Department_1.Department(3, "Phó giám đốc");
var dep4 = new Department_1.Department(4, "Tài chính");
var dep5 = new Department_1.Department(5, "Bảo vệ");
console.log("--- Thông tin phòng ban trên hệ thống: ---");
(0, Department_1.printInforDepartment)(dep1);
(0, Department_1.printInforDepartment)(dep2);
(0, Department_1.printInforDepartment)(dep3);
(0, Department_1.printInforDepartment)(dep4);
(0, Department_1.printInforDepartment)(dep5);
// Possition
var pos1 = new Possition_1.Possition(1, "Dev");
var pos2 = new Possition_1.Possition(2, "Test");
var pos3 = new Possition_1.Possition(3, "Scrum_Master");
var pos4 = new Possition_1.Possition(4, "PM");
console.log("Thông tin Position trên hệ thống:");
(0, Possition_1.printInforPossition)(pos1);
(0, Possition_1.printInforPossition)(pos2);
(0, Possition_1.printInforPossition)(pos3);
(0, Possition_1.printInforPossition)(pos4);
// Account
var date = new Date("2021-09-22");
var acc1 = new Account_1.Account(1, "hung1@gmail.com", "hung1", "hung1", dep5, pos4, date);
var acc2 = new Account_1.Account(2, "hung2@gmail.com", "hung2", "hung2", dep5, pos1, date);
var acc3 = new Account_1.Account(3, "hung3@gmail.com", "hung3", "hung3", dep2, pos2, date);
var acc4 = new Account_1.Account(4, "hung4@gmail.com", "hung4", "hung4", dep3, pos4, date);
console.log("Thông tin account trên hệ thống: ");
(0, Account_1.printInforAccount)(acc1);
(0, Account_1.printInforAccount)(acc2);
(0, Account_1.printInforAccount)(acc3);
(0, Account_1.printInforAccount)(acc4);

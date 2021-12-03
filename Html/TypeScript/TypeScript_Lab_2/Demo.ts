import { Account, printInforAccount } from "./Account";
import { Department, printInforDepartment } from "./Department";
import { Possition, printInforPossition } from "./Possition";

// Department
let dep1 = new Department(1, "Sale");
let dep2 = new Department(2, "Kỹ thuật");
let dep3 = new Department(3, "Phó giám đốc");
let dep4 = new Department(4, "Tài chính");
let dep5 = new Department(5, "Bảo vệ");
console.log("--- Thông tin phòng ban trên hệ thống: ---");
printInforDepartment(dep1);
printInforDepartment(dep2);
printInforDepartment(dep3);
printInforDepartment(dep4);
printInforDepartment(dep5);

// Possition
let pos1 = new Possition(1, "Dev");
let pos2 = new Possition(2, "Test");
let pos3 = new Possition(3, "Scrum_Master");
let pos4 = new Possition(4, "PM");
console.log("Thông tin Position trên hệ thống:");
printInforPossition(pos1);
printInforPossition(pos2);
printInforPossition(pos3);
printInforPossition(pos4);

// Account
let date : Date = new Date("2021-09-22");
let acc1 = new Account(1, "hung1@gmail.com", "hung1", "hung1", dep5, pos4, date);
let acc2 = new Account(2, "hung2@gmail.com", "hung2", "hung2", dep5, pos1, date);
let acc3 = new Account(3, "hung3@gmail.com", "hung3", "hung3", dep2, pos2, date);
let acc4 = new Account(4, "hung4@gmail.com", "hung4", "hung4", dep3, pos4, date);

console.log("Thông tin account trên hệ thống: ");
printInforAccount(acc1);
printInforAccount(acc2);
printInforAccount(acc3);
printInforAccount(acc4);

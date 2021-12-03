import { Engineer } from "./Engineer";
import { Worker } from "./Worker";
import { Employee } from "./Employee";
import { Staff } from "./Staff";

// Tạo ra các đối tượng
let worker1 = new Worker("Worker1", 20, "Male", "HN", 10);
let worker2 = new Worker("Worker2", 22, "FeMale", "NĐ", 7);
let worker3 = new Worker("Worker3", 24, "Male", "HN", 8);

let Engineer1 = new Engineer("Engineer1", 20, "Male", "HN", "DEV");
let Engineer2 = new Engineer("Engineer2", 22, "FeMale", "NĐ", "TEST");
let Engineer3 = new Engineer("Engineer3", 24, "Male", "HN", "DEV");

let Employee1 = new Employee("Employee1", 20, "Male", "HN", "Task1");
let Employee2 = new Employee("Employee2", 22, "FeMale", "NĐ", "Task2");
let Employee3 = new Employee("Employee3", 24, "Male", "HN", "Task3");

let staffArray: Staff[];
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
function printWorkerInfor(staffArray: Staff[]) {
  staffArray.forEach((element) => {
    if (element instanceof Worker) {
      element.printInforWorker();
    }
    // console.log(element instanceof Worker);
  });
}

printWorkerInfor(staffArray);
// Cach 2: HOF
function printStaff(staffArray: Staff[], function_print) {
  return function_print(staffArray);
}
console.log("Sử dụng HOF để tin thông tin");
printStaff(staffArray, printWorkerInfor);

// CÁCH 3: Viết hàm giá trị truyền vào là 1 object
console.log("Cach 3 ");
function printStaffArray(staffArray: Staff[], params) {
  staffArray.forEach((element) => {
    if (element instanceof params) {
      console.log(element);
    }
  });
}
printStaffArray(staffArray, Engineer);

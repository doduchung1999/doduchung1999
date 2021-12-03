import{Worker} from "./Worker";
import { Engineer } from "./Engineer";
import { Employee } from "./Employee";

let worker1 = new Worker("Worker1", 20, "Male", "HN", 10);  // Tạo mới 1 đối tượng Worker.
let worker2 = new Worker("Worker2", 22, "FeMale", "NĐ", 7);
let worker3 = new Worker("Worker3", 24, "Male", "HN", 8);

worker1.printInforWorker();
console.log("------------------Demo Array Worker ------------------");
let workerArray: Worker[];
workerArray = [worker1, worker2, worker3];
console.log("----- Sử dụng ForEach để in thông tin Worker");
workerArray.forEach(element => {
    element.printInforWorker();
});

// Engineer
let Engineer1 = new Engineer("Engineer1", 20, "Male", "HN", "DEV");  // Tạo mới 1 đối tượng Worker.
let Engineer2 = new Engineer("Engineer2", 22, "FeMale", "NĐ", "TEST");
let Engineer3 = new Engineer("Engineer3", 24, "Male", "HN", "DEV");
Engineer1.PrintInforEngineer();

console.log("------------------Demo Set Engineer ------------------");
let engineerSet = new Set();
engineerSet.add(Engineer1);
engineerSet.add(Engineer2);
engineerSet.add(Engineer3);

console.log("Total element of set: "+ engineerSet.size);
engineerSet.forEach(element => {
    console.log(element);
    
});
console.log("Delete a element in set: "+ engineerSet.delete(Engineer3));
engineerSet.forEach(element => {
    console.log(element);
    
});
console.log("------------------Finish Demo Set ------------------");

// Employee
let Employee1 = new Employee("Employee1", 20, "Male", "HN", "Task1");  // Tạo mới 1 đối tượng Worker.
let Employee2 = new Employee("Employee2", 22, "FeMale", "NĐ", "Task2");
let Employee3 = new Employee("Employee3", 24, "Male", "HN", "Task3");
Employee1.printInforEmployee();

console.log("----------------- Demo For Of qua Array ------------------");
let EmployeeArray: Employee[];  // Khai báo 1 mảng
EmployeeArray = [Employee1, Employee2, Employee3]; 
// Sử dụng for of để in thông tin 
for (const element of EmployeeArray) {
    element.printInforEmployee();
}
console.log("------------------Finish Demo For of ------------------");

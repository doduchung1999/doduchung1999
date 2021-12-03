import { Worker } from "./Worker";
import { Engineer } from "./Engineer";
import { Employee } from "./Employee";
 
//  Thử tạo ra các worker bằng cách gán các giá trị từ biến khai báo với Var
// Tạo worker1:
// Khai báo ra các biến lưu thông tin worker dùng var, ở đây thấy cấu trúc của Var khai báo khá cởi mở, không yêu cầu về kểu dữ liệu
var name: string = "Worker1";
var age = 18;
var gender = "Male";
var address;
address = "HN";
var rank: number = 7;

let worker1 = new Worker(name, age, gender, address, rank);
console.log('Thông tin worker1');
worker1.printInforWorker();
// let không thể khai báo lại worker1

let worker2 = new Worker("Worker2_Name2", 22, "Male", "HN", 9);
function printWorker_array() :void{
    let workerArray: Worker[];
    workerArray = [worker1,worker2];
    workerArray.forEach(element => {
        console.log(element);
        
    });
    worker2 = new Worker("Worker2_Name2_Change", 22, "Male_Change", "HN_Change", 9);

}
printWorker_array();
console.log('Thông tin Worker sau khi thay đổi trong hàm printWorker_array');
console.log(worker2);

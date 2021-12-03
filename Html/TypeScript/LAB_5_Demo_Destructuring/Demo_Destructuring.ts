import { count } from "console";

let account = {
    name: "daonq",
    age: 20,
    gender: "Nam",
    address: "HN",
};

let {name : name_let, age : age_let, gender: gender_let, address: address_let} = account;
console.log("------------Thông tin các biến sau khi gán giá trị:");
console.log("Giá trị biến name_let: ", name_let);
console.log("Giá trị biến age_let: ", age_let);
console.log("Giá trị biến gender_let: ", gender_let);
console.log("Giá trị biến address_let: ", address_let);

// Tạo đối tượng Worker có các thuộc tính như account và thêm vào bậc nữa rank;
// Sử dụng toán tử ...
let worker = {
    ...account,
    rank: 10,
}
console.log(worker);

let nameArray: String[] = ["Name1", "Name2", "Name3"];
let [Student1, Student2, Student3] = nameArray;
console.log("-------Thông tin tên các sinh viên sau khi destructuring: ")
console.log("Student1: ", Student1);
console.log("Student2: ", Student2);
console.log("Student3: ", Student3);
let name_Array_NEW: String[]=[...nameArray, "Name4", "Name5", "Name6"];
console.log("-----------Thông tin sinh viên trong mảng name_Array_NEW: ");
for (let index = 0; index < name_Array_NEW.length; index++) {
    console.log("Sinh vien: ", index+1, name_Array_NEW[index]);
    
    
}

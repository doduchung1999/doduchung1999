import { count } from "console";

console.log('---------------- Demo số PI với Primative: ');
const pi = 3.14;
console.log("Giá trị số PI là:" + pi );
const account = {
    name: "daonq",
    age: 20,
    gender: "Nam",
    address: "HN",
}
console.log(account);
account.name = "daonq_Change";
console.log(account);
// khi gán giá trị cho account = {} sẽ không đc vì là const nhưng có thể thay đổi
// từng thuộc tính của account
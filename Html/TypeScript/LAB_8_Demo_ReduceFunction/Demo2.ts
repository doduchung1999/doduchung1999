import { Staff } from "./Staff";

// Tạo ra các đối tượng
let staff1 = new Staff("staff1", 20, "Male", "HN");
let staff2 = new Staff("staff2", 22, "FeMale", "NĐ");
let staff3 = new Staff("staff3", 24, "Male", "HN");

let staffArray: Staff[];
staffArray = [staff1, staff2, staff3];

let total_Age = staffArray.reduce(
  (total_Age, itemCurrent) => total_Age + itemCurrent.getage(),
  0
);
console.log(
  "Tuổi trung bình của nhân viên là: ",
  total_Age / staffArray.length
);

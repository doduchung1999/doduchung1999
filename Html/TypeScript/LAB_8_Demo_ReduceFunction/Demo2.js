"use strict";
exports.__esModule = true;
var Staff_1 = require("./Staff");
// Tạo ra các đối tượng
var staff1 = new Staff_1.Staff("staff1", 20, "Male", "HN");
var staff2 = new Staff_1.Staff("staff2", 22, "FeMale", "NĐ");
var staff3 = new Staff_1.Staff("staff3", 24, "Male", "HN");
var staffArray;
staffArray = [staff1, staff2, staff3];
var total_Age = staffArray.reduce(function (total_Age, itemCurrent) { return total_Age + itemCurrent.getage(); }, 0);
console.log("Tuổi trung bình của nhân viên là: ", total_Age / staffArray.length);

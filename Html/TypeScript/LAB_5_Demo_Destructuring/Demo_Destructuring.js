var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var account = {
    name: "daonq",
    age: 20,
    gender: "Nam",
    address: "HN"
};
var name_let = account.name, age_let = account.age, gender_let = account.gender, address_let = account.address;
console.log("------------Thông tin các biến sau khi gán giá trị:");
console.log("Giá trị biến name_let: ", name_let);
console.log("Giá trị biến age_let: ", age_let);
console.log("Giá trị biến gender_let: ", gender_let);
console.log("Giá trị biến address_let: ", address_let);
// Tạo đối tượng Worker có các thuộc tính như account và thêm vào bậc nữa rank;
// Sử dụng toán tử ...
var worker = __assign(__assign({}, account), { rank: 10 });
console.log(worker);
var nameArray = ["Name1", "Name2", "Name3"];
var Student1 = nameArray[0], Student2 = nameArray[1], Student3 = nameArray[2];
console.log("-------Thông tin tên các sinh viên sau khi destructuring: ");
console.log("Student1: ", Student1);
console.log("Student2: ", Student2);
console.log("Student3: ", Student3);
var name_Array_NEW = __spreadArray(__spreadArray([], nameArray, true), ["Name4", "Name5", "Name6"], false);
console.log("-----------Thông tin sinh viên trong mảng name_Array_NEW: ");
for (var index = 0; index < name_Array_NEW.length; index++) {
    console.log("Sinh vien: ", index + 1, name_Array_NEW[index]);
}

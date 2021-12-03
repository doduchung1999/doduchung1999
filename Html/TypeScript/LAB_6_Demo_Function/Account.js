"use strict";
exports.__esModule = true;
exports.printInforStaff = exports.print_account_Arrow_function_1 = exports.print_account_Arrow_function = exports.print_Account = exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account($name, $age, $gender, $address) {
        this.name = $name;
        this.age = $age;
        this.gender = $gender;
        this.address = $address;
    }
    Account.prototype.getname = function () {
        return this.name;
    };
    Account.prototype.getage = function () {
        return this.age;
    };
    Account.prototype.getgender = function () {
        return this.gender;
    };
    Account.prototype.getaddress = function () {
        return this.address;
    };
    Account.prototype.setname = function (value) {
        this.name = value;
    };
    Account.prototype.setage = function (value) {
        this.age = value;
    };
    Account.prototype.setgender = function (value) {
        this.gender = value;
    };
    Account.prototype.setaddress = function (value) {
        this.address = value;
    };
    return Account;
}());
exports.Account = Account;
// Cách 1
function printInforStaff(account) {
    console.log("Name: " + account.getname() + " Age: " + account.getage() +
        " Gender: " + account.getgender() + " Address: " + account.getaddress());
}
exports.printInforStaff = printInforStaff;
// Cách 2
var print_Account = function printInforStaff_Orther(account) {
    console.log("Name: " + account.getname() + " Age: " + account.getage() +
        " Gender: " + account.getgender() + " Address: " + account.getaddress());
};
exports.print_Account = print_Account;
// Cách 3 Arrow function
var print_account_Arrow_function = function (account) {
    console.log("Name: " + account.getname() + " Age: " + account.getage() +
        " Gender: " + account.getgender() + " Address: " + account.getaddress());
};
exports.print_account_Arrow_function = print_account_Arrow_function;
// Cách 4 Arrow dưới dạng ngắn gọn hơn, bỏ ngoặc () trong khai báo biếnđầu vào bỏ{} trong đoạn return
var print_account_Arrow_function_1 = function (account) {
    return console.log("Name: " + account.getname() + " Age: " + account.getage() + " Gender: " + account.getgender() + " Address: " + account.getaddress());
};
exports.print_account_Arrow_function_1 = print_account_Arrow_function_1;

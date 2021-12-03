"use strict";
exports.__esModule = true;
exports.printInforAccount = exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account($id, $email, $username, $fullname, $department, $possition, $createDate) {
        this.id = $id;
        this.email = $email;
        this.username = $username;
        this.fullname = $fullname;
        this.department = $department;
        this.possition = $possition;
        this.createDate = $createDate;
    }
    Account.prototype.getid = function () {
        return this.id;
    };
    Account.prototype.getemail = function () {
        return this.email;
    };
    Account.prototype.getusername = function () {
        return this.username;
    };
    Account.prototype.getfullname = function () {
        return this.fullname;
    };
    Account.prototype.getdepartment = function () {
        return this.department;
    };
    Account.prototype.getpossition = function () {
        return this.possition;
    };
    Account.prototype.getcreateDate = function () {
        return this.createDate;
    };
    Account.prototype.setid = function (value) {
        this.id = value;
    };
    Account.prototype.setemail = function (value) {
        this.email = value;
    };
    Account.prototype.setusername = function (value) {
        this.username = value;
    };
    Account.prototype.setfullname = function (value) {
        this.fullname = value;
    };
    Account.prototype.setdepartment = function (value) {
        this.department = value;
    };
    Account.prototype.setpossition = function (value) {
        this.possition = value;
    };
    Account.prototype.setcreateDate = function (value) {
        this.createDate = value;
    };
    return Account;
}());
exports.Account = Account;
function printInforAccount(account) {
    console.log("ID: " + account.getid() + " Username: " + account.getusername() + " Fullname: " + account.getfullname() + " Department: " + account.getdepartment().getname() + " Possition: " + account.getpossition().getname());
}
exports.printInforAccount = printInforAccount;

"use strict";
exports.__esModule = true;
var Account_1 = require("./Account");
var account1 = new Account_1.Account("account1", 20, "Male", "HN");
var account2 = new Account_1.Account("account2", 22, "FeMale", "NĐ");
var account3 = new Account_1.Account("account3", 24, "Male", "HN");
console.log("--- In thông tin theo cách 1: ");
(0, Account_1.printInforStaff)(account1);
console.log("--- In thông tin theo cách 2: ");
(0, Account_1.print_Account)(account2);
console.log("--- In thông tin theo cách 3: ");
(0, Account_1.print_account_Arrow_function)(account3);
console.log("--- In thông tin theo cách 4: ");
(0, Account_1.print_account_Arrow_function_1)(account3);
// Demo map để lặp, map sử dụng callback function, trả vè value và key
// in thông tin account sử dụng map.
console.log("-------Thông tin Account sử dụng Map");
var account_Array;
account_Array = [account1, account2, account3];
account_Array.map(function (account, key) {
    console.log("Stt", key);
    (0, Account_1.printInforStaff)(account);
});

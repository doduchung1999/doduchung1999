import { Account, printInforStaff, print_Account, print_account_Arrow_function, print_account_Arrow_function_1 } from "./Account";

let account1 = new Account("account1", 20, "Male", "HN");  
let account2 = new Account("account2", 22, "FeMale", "NĐ");
let account3 = new Account("account3", 24, "Male", "HN");

console.log("--- In thông tin theo cách 1: ");
printInforStaff(account1);
console.log("--- In thông tin theo cách 2: ");
print_Account(account2);
console.log("--- In thông tin theo cách 3: ");
print_account_Arrow_function(account3);
console.log("--- In thông tin theo cách 4: ");
print_account_Arrow_function_1(account3);

// Demo map để lặp, map sử dụng callback function, trả vè value và key
// in thông tin account sử dụng map.
console.log("-------Thông tin Account sử dụng Map");
let account_Array : Account[];
account_Array = [account1,account2,account3];
account_Array.map(function (account:Account, key: number) {
    console.log("Stt", key);
    printInforStaff(account);
})

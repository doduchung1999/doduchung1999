class Account {
    private name : string;
    private age: number;
    private gender: string;
    private address: string;


	constructor($name: string, $age: number, $gender: string, $address: string) {
		this.name = $name;
		this.age = $age;
		this.gender = $gender;
		this.address = $address;
	}


	public getname(): string {
		return this.name;
	}

	public getage(): number {
		return this.age;
	}

	public getgender(): string {
		return this.gender;
	}

	public getaddress(): string {
		return this.address;
	}

	public setname(value: string) {
		this.name = value;
	}

	public setage(value: number) {
		this.age = value;
	}


	public setgender(value: string) {
		this.gender = value;
	}

	public setaddress(value: string) {
		this.address = value;
	}

    
}

// Cách 1
function printInforStaff(account:Account):void {
	console.log("Name: " + account.getname() + " Age: " + account.getage() +
	" Gender: " + account.getgender() + " Address: " + account.getaddress());
	
}
// Cách 2
let print_Account = function printInforStaff_Orther(account:Account):void {
	console.log("Name: " + account.getname() + " Age: " + account.getage() +
	" Gender: " + account.getgender() + " Address: " + account.getaddress());
}
// Cách 3 Arrow function
let print_account_Arrow_function = (account: Account)=>{
	console.log("Name: " + account.getname() + " Age: " + account.getage() +
	" Gender: " + account.getgender() + " Address: " + account.getaddress());
}
// Cách 4 Arrow dưới dạng ngắn gọn hơn, bỏ ngoặc () trong khai báo biếnđầu vào bỏ{} trong đoạn return
let print_account_Arrow_function_1 = account => 
console.log("Name: " + account.getname() + " Age: " + account.getage() + " Gender: " + account.getgender() + " Address: " + account.getaddress());

export{Account, print_Account,print_account_Arrow_function,print_account_Arrow_function_1,printInforStaff}
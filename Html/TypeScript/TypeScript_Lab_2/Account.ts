import { Department } from "./Department";
import { Possition } from "./Possition";

class Account {
    private id: number;
    private email: string;
    private username: string;
    private fullname: string;
    private department: Department;
    private possition: Possition;
    private createDate: Date;

	constructor($id: number, $email: string, $username: string, $fullname: string, $department: Department, $possition: Possition, $createDate: Date) {
		this.id = $id;
		this.email = $email;
		this.username = $username;
		this.fullname = $fullname;
		this.department = $department;
		this.possition = $possition;
		this.createDate = $createDate;
	}


	public getid(): number {
		return this.id;
	}

	public getemail(): string {
		return this.email;
	}

	public getusername(): string {
		return this.username;
	}

	public getfullname(): string {
		return this.fullname;
	}

	public getdepartment(): Department {
		return this.department;
	}

	public getpossition(): Possition {
		return this.possition;
	}

	public getcreateDate(): Date {
		return this.createDate;
	}

	public setid(value: number) {
		this.id = value;
	}

	public setemail(value: string) {
		this.email = value;
	}

	public setusername(value: string) {
		this.username = value;
	}

	public setfullname(value: string) {
		this.fullname = value;
	}

	public setdepartment(value: Department) {
		this.department = value;
	}

	public setpossition(value: Possition) {
		this.possition = value;
	}

	public setcreateDate(value: Date) {
		this.createDate = value;
	}
    
}
function printInforAccount(account:Account) {
    console.log("ID: " + account.getid() + " Username: " + account.getusername() + " Fullname: " + account.getfullname() + " Department: " + account.getdepartment().getname() + " Possition: " + account.getpossition().getname());
    
}
export{ Account, printInforAccount}
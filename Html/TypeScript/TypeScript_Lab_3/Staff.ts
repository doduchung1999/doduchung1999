class Staff {
    private name: string;
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

    public printInforStaff():void {
        console.log("Tên: " + this.name+ " Tuổi: " + this.age + "Giới tính: " + this.gender + "Địa chỉ: "+ this.address);
        
    }
}

export{Staff}
class Possition {
    private id: number;

    private name: string;

	constructor(id:number, name:string) {
        this.id=id;
        this.name=name;
	}

	public getid(): number {
		return this.id;
	}


	public getname(): string {
		return this.name;
	}

 
	public setid(value: number) {
		this.id = value;
	}

	public setname(value: string) {
		this.name = value;
	}
    
}
function printInforPossition(possition:Possition): void {
    console.log("ID: " + possition.getid() + "Possition Name: " + possition.getname());
}

export{Possition, printInforPossition}
import { Staff } from "./Staff";

class Engineer extends Staff {
    private specialized: string;
    constructor(name: string, age: number, gender: string, address:string, specialized: string) {
        super(name, age, gender, address);
        this.specialized = specialized;
    }
    
    public PrintInforEngineer() {
        console.log("InforEngineer");
        super.printInforStaff();
        console.log("Specialized" + this.specialized);
        
    }
}
export{Engineer}
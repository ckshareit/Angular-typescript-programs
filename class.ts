class Employee{
empCode:number;
empName:string;
constructor(code:number,name:string){
    this.empCode=code;
    this.empName=name;
}


    display1=()=> console.log(this.empCode+" "+this.empName);
}

let emp:Employee=new Employee(1,'ck');
emp.display1();
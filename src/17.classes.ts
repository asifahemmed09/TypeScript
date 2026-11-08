class Employee{
    name: string;
    baseSalary: number;
    constructor(name: string,salary: number){
        this.name = name
        this.baseSalary = salary
    }
}

const employee1 = new Employee("John Doe",50000)

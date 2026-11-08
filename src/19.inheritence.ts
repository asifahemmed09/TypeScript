class Employee {
  constructor(
    public name: string,
    protected _salary: number,
  ) {}
  get salary(): number {
    return this._salary;
  }
  set salary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary can not be negative");
    }
    this._salary = newSalary;
  }
  describeEmployee(){
    console.log(`${this.name} earns ${this.salary}`)
  }
}


class Manager extends Employee{
    constructor(name: string, salary: number, public memberCount: number){
        super(name, salary)
    }
    describeManager(){
        console.log(`${this.name} manages ${this.memberCount} people`)
    }
    managerDetails(){
        console.log(`${this.name} earns ${this._salary}`)
    }

}


const manager = new Manager("John",50000,25)

manager.describeEmployee()
manager.describeManager()
manager.managerDetails()

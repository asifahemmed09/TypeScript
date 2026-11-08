abstract class Employee {
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
  abstract calculatePay(): number
}


class Manager extends Employee{
    calculatePay(){
    return this._salary + 5000
  }
}

const manager = new Manager('John',50000)


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
  calculatePay(taxRate: number){
    return this._salary - this._salary * taxRate
  }
}


class Manager extends Employee{
   override calculatePay(){
    return this._salary + 3000 - this.salary * .2
   }

}



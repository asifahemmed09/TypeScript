class Employee {
  constructor(
    public name: string,
    private _salary: number,
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
}

const employee = new Employee("John", 50000)

console.log(employee.salary)

employee.salary = 60000

console.log(employee.salary)

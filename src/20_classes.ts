class Car{
  model: string
  company: string
  year: number
  constructor(model: string,company: string,year: number){
    this.model = model
    this.company = company
    this.year = year
  }
}

const bmw = new Car("BMW","BMW",2022)

class BankAccount{
  public owner: string
  private accountBalance: number = 2000
  #otp: number = 123
  constructor(owner: string){
    this.owner = owner
  }
  getBalance(){
    this.accountBalance
  }
  withdraw(amount: number){
    if(amount < this.accountBalance) throw new Error("Insufficient Amount")
    this.accountBalance = this.accountBalance - amount
  }
  deposit(amount: number){
    this.accountBalance = this.accountBalance + amount
  }
}

class Shop{
  protected name: string = "Adidas"
}

class Branch extends Shop{
  branch: string
  constructor(branch: string){
    super()
    this.branch = this.name + " " + branch
  }
}

class Temperature{
  #c = 0
  constructor(celsius: number){
    this.celsius = celsius
  }
  get celsius(){
    return this.#c
  }
  set celsius(temp){
    this.celsius = temp
  }
}





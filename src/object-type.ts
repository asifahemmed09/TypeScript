let user: {
  name: string;
  email: string;
  phone: string;
};

user = {
  name: 'John',
  email: 'john@gmail.com',
  phone: '01234',
};

type Order = {
  id: string;
  name: string;
  price: number;
};

const order: Order = {
  id: 'x23',
  name: 'Rice Cooker',
  price: 255,
};

type Item = {
  name: string;
  price: number;
};

type Address = {
  street: string;
  city: string;
  zip: number;
};

type OrderDetails = {
  id: string;
  item: Item;
  address: Address[];
};

// duck typing
type Tea = { type: string };
const myTea = { type: 'Ginger', level: 1 };

const orderTea: Tea = myTea;

type UserDetails = {
  name: string;
  email?: string;
  password: string;
  address: Address;
  phone?: string;
};

// partial
const userPartialDetails = (details: Partial<UserDetails>) => {
  console.log(details);
};

userPartialDetails({ name: 'John' });

// required
const userFullDetails = (details: Required<UserDetails>) => {
  console.log(details);
};

userFullDetails({
  name: 'John',
  password: '123',
  address: { street: '12 Avenue', city: 'New York', zip: 1244 },
  email: "john@gmail.com",
  phone: "12345687"
});

// pick
const userSpecificDetails = (details: Pick<UserDetails,"name" |"email">) => {
 console.log(details)
}
userSpecificDetails({name: "John"})


// omit
const userUnwantedDetails = (details: Omit<UserDetails, "address" | "email" | "phone">) => {
  console.log(details)
}

userUnwantedDetails({name:"John",password:"123"})

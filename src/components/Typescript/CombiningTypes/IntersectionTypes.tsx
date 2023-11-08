// Intersection Types (在type使用的是这个符号 & 来达成extends的效果)

interface Person {
  name: string;
}

interface Address {
  address: string;
}

// Define an intersection type combining Person and Address
export type PersonWithAddress = Person & Address;
// interface PersonWithAddress extends Person, Address {}

export type TNewType = {
  name: string;
  age?: number;
} & Address &
  Person;

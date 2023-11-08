// Instance Type
// 一般使用于class

class Person {
  constructor(public name: string) {}
}

type PersonInstance = InstanceType<typeof Person>;

const person: PersonInstance = new Person('Alice');
console.log(person.name); // Alice

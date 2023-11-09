// Parameters
// 一般用于拿function的type 并用array包裹着

// Example :
function greet(name: string, age: number) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
type GreetParameters = Parameters<typeof greet>;
// GreetParameters 的type是 [string, number]

const parameters: GreetParameters = ['hooky', 123];
greet(...parameters);

// --
type TGreetWithObject = {
  name: string;
  age: number;
};

function greetWithObject({ name, age }: TGreetWithObject) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
type TGreetWithObjectParameters = Parameters<typeof greetWithObject>;
// TGreetWithObjectParameters 的type 是 [{name:string ,age:number}]
const testing: TGreetWithObjectParameters = [
  {
    name: 'hooky',
    age: 123,
  },
];
greetWithObject(...testing);

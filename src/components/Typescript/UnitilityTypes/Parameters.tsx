// Parameters
// 一般用于拿



// Example :
function greet(name: string, age: number) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
export type GreetParameters = Parameters<typeof greet>;
// GreetParameters 的类型是 [string, number]

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
const testing: TGreetWithObjectParameters = [
  {
    name: 'hooky',
    age: 123,
  },
];
greetWithObject(...testing);

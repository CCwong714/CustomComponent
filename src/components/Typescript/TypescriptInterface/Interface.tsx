// Interface
// Interface 必须是 {} 的模式
// 有些人喜欢在 Interface naming 会使用 I 开头

// Example:

// function type
export interface IScheduleVideo {
  (scheduledFor: Date): Promise<boolean>;
}

// extends special case
interface ITestingEmail {
  type: 'email';
  emailAddress: string;
}

interface ITestingSMS {
  type: 'sms';
  phoneNumber: string;
}
interface ITestingState {
  state: 'queued' | 'in-progress' | 'completed';
}

interface TTestingCombined extends ITestingEmail, ITestingState {}
interface TTestingCombined2 extends ITestingSMS, ITestingState {}

export const interfaceDemo: TTestingCombined | TTestingCombined2 = {
  type: 'sms',
  phoneNumber: '123',
  state: 'in-progress',
};

// normal example
interface IPerson {
  name: string;
  age: number;
}

export const person: IPerson = {
  name: 'John',
  age: 18,
};

interface IGame {
  name: string;
  year: number;
  type?: string;
}

export const game: IGame = {
  name: 'mario',
  year: 2022,
};

console.log(game);

// ----------------------------------------------------------------
// special case
interface Calculate {
  (x: number, y: number): number;
}

// 实现一个函数，满足 Calculate 接口的规范
function add(x: number, y: number): number {
  return x + y;
}

// 另一个函数，也满足 Calculate 接口的规范
function multiply(x: number, y: number): number {
  return x * y;
}

// 使用 Calculate 接口来定义变量，可以存储满足规范的函数
let calculator: Calculate;

// 将 add 函数赋值给 calculator 变量
calculator = add;
console.log(calculator(3, 4)); // 输出 7

// 将 multiply 函数赋值给 calculator 变量
calculator = multiply;
console.log(calculator(3, 4)); // 输出 12

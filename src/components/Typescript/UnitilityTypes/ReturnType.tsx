/* eslint-disable @typescript-eslint/no-explicit-any */

// Return Type
// 一般使用于你需要拿到function return的type的时候
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

export type GreetReturnType = ReturnType<typeof greet>; // 这里使用 typeof 获取 greet 函数的类型
// GreetReturnType 的类型现在为 string，因为 greet 函数的返回类型是 string



// ----------------------------------------------------------------
// Example :

export type T0 = ReturnType<() => string>;
// type T0 = string

export type T1 = ReturnType<(s: string) => void>;
// type T1 = void

export type T2 = ReturnType<<T>() => T>;
// type T2 = unknown

export type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type T3 = number[]

declare function f1(): { a: number; b: string };
export type T4 = ReturnType<typeof f1>;
//- type T4 = {
//-     a: number;
//-     b: string;
//- }

export type T5 = ReturnType<any>;
// type T5 = any

export type T6 = ReturnType<never>;
// type T6 = never

// export type T7 = ReturnType<string>;
// ^ Type 'string' does not satisfy the constraint '(...args: any) => any'.

// export type T8 = ReturnType<Function>;
// ^ Type 'Function' does not satisfy the constraint '(...args: any) => any'.

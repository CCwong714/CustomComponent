/* eslint-disable @typescript-eslint/no-explicit-any */

// Function Overloading

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add('Hello', ' World')); // "Hello World"
console.log(add('Hello', 123));
console.log(add(123, 'World'));

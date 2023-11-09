// Typing Function
// : 后面的是return 的 type
export function add(a: number, b: number): number {
  return a + b;
}

export const multiply = (a: number, b: number): number => {
  return a * b;
};
// 因为multiple return 的 type 为 number， 所以result的type 为number
export const result = multiply(1, 2);

const divide: (a: number, b: number) => number = (a, b) => a / b;
export const newResult = divide(1, 2);

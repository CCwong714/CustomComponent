// Type ----------------------------------------------------------------
type TObject = {
  address: string;
  email: string;
};

type TType = {
  id: number;
  details?: TObject;
};

// Extends ------------------------------------------------------------------
type TNewType = {
  name: string;
  age?: number;
} & TType;

// keyof Operator -----------------------------------------------------------
type TOperator = 'male' | 'female';

// Generic Types   ----------------------------------------------------------
type TPair<T, U> = {
  first: T;
  second: U;
};

const pair: TPair<number, string> = {
  first: 42,
  second: 'Hello',
};
console.log(pair);

// Conditional Types
type TExtends<T, U> = T extends U ? T : U;

type A = TExtends<number, string>;
type B = TExtends<number, unknown>;

export const ExampleA: A = 'exampleA';
export const ExampleB: B = 0;

// Non Null Assertion -------------------------------------------------------

export const Type = () => {
  const myInterface: TNewType = { id: 1, name: 'Hobby' };
  const gender: TOperator = 'male';
  console.log(myInterface, gender);
};

export default Type;

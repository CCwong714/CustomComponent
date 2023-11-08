// Interface ----------------------------------------------------------------
interface IObject {
  address: string;
  email: string;
}
interface IInterface {
  id: number;
  details?: IObject;
}

// Extends ------------------------------------------------------------------
interface INewInterface extends IInterface {
  name: string;
  age?: number;
}

// keyof Operator -----------------------------------------------------------
interface IOperator {
  gender: 'male' | 'female';
}

// Generic Types   ----------------------------------------------------------
interface IPair<T, U> {
  first: T;
  second: U;
}
const pair: IPair<number, string> = { first: 42, second: 'Hello' };
console.log(pair);

// 

const Interface = () => {
  const myInterface: INewInterface = { id: 1, name: 'Hobby' };
  const gender: IOperator = { gender: 'male' };

  console.log(myInterface, gender);

  return <div>Interface</div>;
};

export default Interface;

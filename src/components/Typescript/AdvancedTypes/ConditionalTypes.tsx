// general type checking
// 一种运用if else的type 在type 里面做checking
export type TMyType<T> = T extends string ? string : number;
export type TA = TMyType<string>;
//- A :type string
export type TB = TMyType<boolean>;
//- B :type number

// ----------------------------------------------------------------

// use in function
function handleChecking<T>(value: T) {
  if (typeof value === 'string') {
    return console.log('oh! i am string');
  } else if (typeof value === 'number') {
    return console.log('oh! i am number');
  }
  return console.log(`i am ${typeof value}`);
}

handleChecking(true);

// with arrow function
const handleCheckingWithArrow = <T,>(value: T) => {
  if (typeof value === 'string') {
    return console.log('oh! i am string');
  } else if (typeof value === 'number') {
    return console.log('oh! i am number');
  }
  return console.log(`i am ${typeof value}`);
};
handleCheckingWithArrow([]);
// output : i am object


// use with mapped type
// 个人感觉用没用没差别
export type TStripUndefined<T> = {
  [K in keyof T]: T[K] extends undefined ? never : T[K];
};

interface IExampleObject {
  a: number;
  b: string;
  c?: boolean;
  d?: undefined;
}

type TMappedType = TStripUndefined<IExampleObject>;

const testing: TMappedType = { a: 1, b: '123' };
console.log(testing);

// 复杂条件型
// Complex conditions for tool types
// type MyUtility<T> = SomeType<T> extends SomeCondition<T> ? ResultType<T> : AnotherResultType<T>;

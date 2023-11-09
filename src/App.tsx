import { Signal, effect, signal } from '@preact/signals-react';
import React from 'react';
import Typescript from './components/Typescript/Typescript';

const testing: Signal<null | Array<number | string | boolean | number[]>> =
  signal(null);
// console.log(testing.value);
testing.value = [1, 2, '3', 4, false, 5, 6, 7, [1, 2, 3]];
// console.log(testing.value);

effect(() => {});

const App: React.FC = () => {
  // const handleSumbit = MyNameSpace.handleSumbit;

  return (
    <div className='mx-8 flex flex-col gap-2 items-center justify-center w-[100vw] h-[100vh]'>
      home page
      {/* <Typescript /> */}
    </div>
  );
};

export default App;

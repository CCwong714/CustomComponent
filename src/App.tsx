import { Signal, effect, signal } from '@preact/signals-react';
import React from 'react';
import { MyNameSpace, NewNameSpace } from './components/Typescript/NameSpace';

const testing: Signal<null | Array<number | string | boolean | number[]>> =
  signal(null);
// console.log(testing.value);
testing.value = [1, 2, '3', 4, false, 5, 6, 7, [1, 2, 3]];
// console.log(testing.value);

effect(() => {});

const App: React.FC = () => {
  // const handleSumbit = MyNameSpace.handleSumbit;
  // Enum ----------------------------------------------------------------
  // console.log(EnumColor[0] === EnumColor[EnumColor.e]);
  // console.log(EnumColor[2] === EnumColor[EnumColor.e]);
  // const colorArray = Object.keys(EnumColor).map((key) => EnumColor[key]);

  return (
    <div className='mx-8 flex flex-col gap-2 items-center justify-center w-[100vw] h-[100vh]'>
      {/* NameSpace ------------------------ */}
      <button
        type='button'
        className='border-solid border-2 p-2 rounded-md'
        onClick={() => {
          MyNameSpace.handleSumbit();
          NewNameSpace.handleSumbit();
          // handleSumbit();
        }}
      >
        click me
      </button>
      {/* Enum ----------------------------- */}
      {/* {colorArray.map((items) => {
        return items;
      })} */}

      <p className='text-red-500 text-[50px]'>Typescript </p>
    </div>
  );
};

export default App;

import React from 'react';
import { MyNameSpace, NewNameSpace } from './TypescriptModules/NameSpace';

const Typescript: React.FC = () => {
  return (
    <div className='mx-8 flex flex-col gap-2 items-center justify-center w-[100vw] h-[100vh]'>
      {/* NameSpace ------------------------ */}
      <p className='text-red-500 text-[50px]'>
        Typescript {MyNameSpace.DemoValue}
      </p>
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
    </div>
  );
};

export default Typescript;

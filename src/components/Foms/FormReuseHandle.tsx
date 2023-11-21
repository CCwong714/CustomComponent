import React from 'react';
import { useState } from 'react';

const FormReuseHandle: React.FC = () => {
  const [state, setState] = useState({ username: '', password: '' });
  const handleInputChange = (event: {
    target: { name: string; value: string | number };
  }) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };
  // console.log(state);

  return (
    <div className='flex flex-col gap-3 mx-auto max-w-[300px]'>
      <p>username :</p>
      <input
        name='username'
        onChange={handleInputChange}
        className='border-solid border-2 rounded-md'
      />
      <p>password :</p>
      <input
        name='password'
        onChange={handleInputChange}
        className='border-solid border-2 rounded-md'
      />
      {JSON.stringify(state)}
    </div>
  );
};

export default FormReuseHandle;

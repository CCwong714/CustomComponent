import React from 'react';
import CustomSpinner from './components/Custom/CustomSpinner';
import CustomAccordions from './components/Custom/CustomAccordions';

const App: React.FC = () => {
  return (
    <div className='mx-8'>
      <p className='text-red-500 text-[50px]'>Appahjksdghakjdshfjka</p>
      <CustomSpinner />
      <CustomAccordions title='1234' className=''>
        <p>123</p>
      </CustomAccordions>
      <CustomAccordions title='1234' className=''>
        <p>123</p>
      </CustomAccordions>
      <hr className='dashed' />
    </div>
  );
};

export default App;

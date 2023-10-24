import { useState } from 'react';

const CustomDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className='flex'>
      <button
        type='button'
        onClick={() => setDrawerOpen(!drawerOpen)}
        className={`absolute left-0 top-0 inline-block rounded-lg bg-indigo-500 p-4 transition-all duration-500 ${
          drawerOpen ? 'left-64 rotate-180' : ''
        }`}
        aria-label='Toggle Drawer'
      >
        <svg
          fill='none'
          height='24'
          shapeRendering='geometricPrecision'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.5'
          viewBox='0 0 24 24'
          width='24'
          className='rotate-90'
        >
          <path d='M6 9l6 6 6-6' />
        </svg>
      </button>
      <div
        className={`fixed left-0 top-0 z-20 h-full w-64 transform bg-white shadow-lg transition-all duration-500 ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='px-6 py-4'>
          <h2 className='text-lg font-semibold'>Drawer</h2>
          <p className='text-gray-500'>This is a drawer.</p>
        </div>
      </div>
    </div>
  );
};

export { CustomDrawer };

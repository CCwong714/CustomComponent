import React from 'react';

interface AccordionsProps {
  title: string;
  className: string;
  children: React.ReactNode;
}
const Accordions: React.FC<AccordionsProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <div className='py-1'>
      <details className='group'>
        <summary className='flex cursor-pointer list-none items-center justify-between font-medium border-solid border-2 p-2 rounded-lg group-open:rounded-b-none'>
          <span className={className}>{title}</span>
          <span className='transition-transform group-open:rotate-180'>
            <svg
              fill='none'
              height='24'
              shapeRendering='geometricPrecision'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              width='24'
            >
              <path d='M6 9l6 6 6-6' />
            </svg>
          </span>
        </summary>

        <div className='duration-500 ease-in-out overflow-hidden pt-3 border-solid border-2 border-t-0 rounded-b-lg p-2 max-h-0 group-open:max-h-96 '>
          {children}
        </div>
      </details>
    </div>
  );
};

export { Accordions };

// Example
/* 
<Accordions title='sleep' className='text-white'>
	<p>123</p>
</Accordions> 
*/

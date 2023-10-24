import React from 'react';

interface CustomAccordionsProps {
  title: string;
  className: string;
  children: React.ReactNode;
}
const CustomAccordions: React.FC<CustomAccordionsProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <div className='py-1'>
      <details className='group'>
        <summary className='flex cursor-pointer list-none items-center justify-between font-medium border-solid border-2 p-2 rounded-lg group-open:rounded-b-none'>
          <span className={className}>{title}</span>
          <span className='transition group-open:rotate-180'>
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
        <div className='group-open:animate-fadeIn pt-3 p-2 border-solid border-2 border-t-0 group-open:rounded-b-xl'>
          {children}
        </div>
      </details>
    </div>
  );
};

export { CustomAccordions };

// Example
/* 
<CustomAccordions title='sleep' className='text-white'>
	<p>123</p>
</CustomAccordions> 
*/

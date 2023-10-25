import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div
      className='h-7 w-full animate-pulse rounded-2xl bg-gray-200'
      style={{ animationDelay: '0.2s' }}
    />
  );
};

export { Skeleton };

import React from 'react';
import { cn } from '../../utils/cnStyles';

interface CustomSpinnerProps {
  width?: string;
  height?: string;
}

const CustomSpinner: React.FC<CustomSpinnerProps> = ({ width, height }) => {
  return (
    <div
      className={cn(
        'animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-500',
        width,
        height
      )}
    />
  );
};

export { CustomSpinner };

CustomSpinner.defaultProps = {
  width: 'w-10',
  height: 'h-10',
};

import { cn } from '../../utils/cnStyles';

interface CustomButtonProps {
  width?: string;
  height?: string;
  className?: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  width,
  height,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      type='button'
      className={cn('flex flex-row justify-center', width, height, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { CustomButton };

CustomButton.defaultProps = {
  height: '30px',
  width: 'w-full',
  className: 'bg-blue-300 hover:bg-blue-600 active:bg-blue-800',
};

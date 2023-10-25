import { cn } from '../../utils/cnStyles';

interface ButtonProps {
  width?: string;
  height?: string;
  className?: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
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

export { Button };

Button.defaultProps = {
  height: '30px',
  width: 'w-full',
  className: 'bg-blue-300 hover:bg-blue-600 active:bg-blue-800',
};

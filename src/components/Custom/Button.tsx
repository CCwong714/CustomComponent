import { cn } from '../../utils/cnStyles';

interface ButtonProps extends React.ComponentProps<'button'> {
  type?: 'button' | 'reset' | 'submit';
  width?: string;
  height?: string;
  className?: string;
  children: React.ReactNode;
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  type,
  width,
  height,
  className,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn('flex flex-row justify-center', width, height, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };

Button.defaultProps = {
  type: 'button',
  height: '30px',
  width: 'w-full',
  className: 'bg-green-600 hover:bg-green-500 active:bg-green-300 rounded-',
};

interface ImgProps extends React.ComponentProps<'button'> {
  src: string;
  alt: string;
  imgProps?: React.HTMLProps<HTMLImageElement>;
}

interface Props extends ImgProps {
  path: string;
}

const Svg = ({ src, alt, path, imgProps, ...props }: Props) => {
  return (
    <button type='button' {...props}>
      <img src={`/images${path}/${src}.svg`} alt={alt} {...imgProps} />
    </button>
  );
};

const Png = ({ src, alt, path, imgProps, ...props }: Props) => {
  return (
    <button type='button' {...props}>
      <img src={`/images${path}/${src}.png`} alt={alt} {...imgProps} />
    </button>
  );
};

const Img = ({ src, alt, imgProps, ...props }: ImgProps) => {
  return (
    <button type='button' {...props}>
      <img src={src} alt={alt} {...imgProps} />
    </button>
  );
};

export { Img, Png, Svg };

// Example :

/* 
<Img
  src=''
- alt=''
  onClick={() => {
    console.log('i am image');
  }}
  className='bg-red-500 w-[100px] h-[50px]'
  imgProps={{ className: '' }}
/> 

*/

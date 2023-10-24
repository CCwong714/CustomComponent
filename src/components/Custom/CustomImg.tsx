interface CustomImgProps extends React.ComponentProps<'button'> {
  src: string;
  alt: string;
  imgProps?: React.HTMLProps<HTMLImageElement>;
}

interface CustomProps extends CustomImgProps {
  path: string;
}

const CustomSvg = ({ src, alt, path, imgProps, ...props }: CustomProps) => {
  return (
    <button type='button' {...props}>
      <img src={`/images${path}/${src}.svg`} alt={alt} {...imgProps} />
    </button>
  );
};

const CustomPng = ({ src, alt, path, imgProps, ...props }: CustomProps) => {
  return (
    <button type='button' {...props}>
      <img src={`/images${path}/${src}.png`} alt={alt} {...imgProps} />
    </button>
  );
};

const CustomImg = ({ src, alt, imgProps, ...props }: CustomImgProps) => {
  return (
    <button type='button' {...props}>
      <img src={src} alt={alt} {...imgProps} />
    </button>
  );
};

export { CustomImg, CustomPng, CustomSvg };

// Example :

/* 
<CustomImg
  src=''
- alt=''
  onClick={() => {
    console.log('i am image');
  }}
  className='bg-red-500 w-[100px] h-[50px]'
  imgProps={{ className: '' }}
/> 

*/

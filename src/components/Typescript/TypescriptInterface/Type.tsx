// type
// 有些人喜欢在 type naming 会使用 T 开头

// Example
// same nameing
// type 和Interface 不一样在于他不会自动把两个一样名字的 combine起来
// 这种情况他将会优先选择第一个为你的type
// type is not allowed same name 
// Type is different from Interface. It does not combine 
// two names with the same name.
// In this case Typescript will give priority to the first one as your type
type TUserDetils = {
  name: string;
  age: number;
};
type TUserDetils = {
  address: string;
  height: number;
};
export const userDetails: TUserDetils = {
  name: 'John',
  age: 18,
  address: 'KL Tower',
  height: 180,
};

// function type
export type TScheduleVideo = (schedulerFor: Date) => Promise<boolean>;

// exstand special case
type TTesting =
  | { type: 'email'; emailAddress: string }
  | { type: 'sms'; phoneNumber: string };

type TTesting2 = TTesting & {
  state: 'queued' | 'in-progress' | 'completed';
};

export const demo: TTesting2 = {
  type: 'email',
  emailAddress: '123',
  state: 'in-progress',
};

// normal example
type TGame = {
  name: string;
  year: number;
  type?: string;
};
const game: TGame = {
  name: 'mario',
  year: 2022,
};
console.log(game);
// output : mario,2022

const handleAddGame = ({ name, year, type }: TGame) => {
  const a = name;
  const b = year;
  const c = type;
  console.log(a, b, c);
  // output : One Piece , 2015 , game
};
handleAddGame({ name: 'One Piece', year: 2015 });

handleAddGame.defaultProps = {
  type: 'game',
};

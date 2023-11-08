// Keyof Operator
// 用特定的字眼当Type ， 或者object 的 key来当type

interface User {
  name: string;
  age: number;
  location: string;
  time: '2PM' | '5PM' | '9PM';
}

type UserKeys = keyof User; // "name" | "age" | "location" ,"time"
export const key: UserKeys = 'name';

// Enum
// 一般适用于naming
// Enum 是允许同样的naming的 ，在同样的naming上它属于Interface
// Enum 不能用来 .map
export enum EnumColor {
  a = 2,
  b,
  c,
  d,
}
export enum EnumColor {
  e = 2,
  f,
  g,
  h,
}
// const colorArray = Object.keys(EnumColor).map((key) => EnumColor[key]);

// special case

export enum EProfile {
  AGE = 999,
  NAME = 'Mario',
  ID = 1,
  ADDRESS = '1234 Rainbow Road',
}

export enum ETesting {
  USER_NAME = 'User Name',
  PASSWORD = 'Password',
  NEW_PASSWORD = 'New Password',
  LOGIN = 'Login',
  LOGOUT = 'Logout',
}

export enum Text {
  a,
  b,
  c,
  d,
}
export enum Text {
  e = 2,
  f,
  g,
  h,
}
console.log(Text['d']);

// Template Literal Types
// 属于Literal Types的升级版
// 但却没有Literal Types 那么死板
type TName = `Mr. ${string}`;
export const name1: TName = `Mr. Smith`; // ok
export const name2: TName = `Mrs. Smith`; // error







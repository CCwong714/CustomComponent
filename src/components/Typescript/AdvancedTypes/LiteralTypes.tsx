//  Literal Types
// 属于一种自定义的type

type TStatus = 'success' | 'error';
export const success: TStatus = `success`; // ok
export const pending: TStatus = `pending`; // error

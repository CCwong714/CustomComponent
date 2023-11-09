// Recursive Types
// 一种让自己运用自己的type类型
// 类似俄罗斯套娃
// type
type TLinkedList<T> = {
  value: T;
  next: TLinkedList<T> | null;
};

export const listT: TLinkedList<number> = {
  value: 1,
  next: { value: 2, next: { value: 3, next: null } },
};

// ----------------------------------------------------------------
// interface

interface ILinkedList<T> {
  value: T;
  next: ILinkedList<T> | null;
}

export const listI: ILinkedList<number> = {
  value: 1,
  next: { value: 2, next: { value: 3, next: null } },
};

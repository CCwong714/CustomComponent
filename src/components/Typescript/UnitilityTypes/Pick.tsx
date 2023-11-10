// Pick
// 不适用与array, 正常情况下都适用于object
// Pick用于挑选出你要的
// Example:
interface ITodo {
  title: string;
  description: string;
  completed: boolean;
}

interface ITodo2 {
  title: string;
  completed: boolean;
  placeholder: string;
}

type TTodoPreview = Pick<ITodo, keyof ITodo & keyof ITodo2>;

export const todo: TTodoPreview = {
  title: 'Clean room',
  completed: false,
};

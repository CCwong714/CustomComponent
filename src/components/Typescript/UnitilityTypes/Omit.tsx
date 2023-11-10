// Omit
// 不适用与array, 正常情况下都适用于object
// Omit用于挑选出你不要的
// Example:
interface ITodo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

interface ITodo2 {
  completed: boolean;
  createdAt: number;
  name: string;
}

type TodoInfo = Omit<ITodo, keyof ITodo2>;

export const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
};

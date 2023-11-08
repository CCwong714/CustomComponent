// Omit
// 不适用与array, 正常情况下都适用于object
// Omit用于挑选出你不要的
// Example:
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;

export const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
};

// Partial
// 一般用于object optional （就是?:)
// Example ：
interface IPerson {
  name: string;
  age?: number; // 'age' 属性是可选的(object optional)
}
export const updateIPerson = (
  person: IPerson,
  newData: Partial<IPerson>
): IPerson => {
  return { ...person, ...newData };
};
//或者
export const partialPerson: Partial<IPerson> = { name: 'Alice' };

// ------------------------------------------------------------------
// 不使用object optional 的 Example
interface Person {
  name: string;
  age: number; // 'age' 属性是必需的
}

export function updatePerson(person: Person, newData: Person): Person {
  return { ...person, ...newData };
}

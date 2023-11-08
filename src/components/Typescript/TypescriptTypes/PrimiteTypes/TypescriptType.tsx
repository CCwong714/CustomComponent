import { useEffect } from 'react';

export const typeUnknown: unknown = 'unknown';
export const typeNumber: number = 12;
export const typeString: string = 'string';
export const typeBoolean: boolean = true;
export const typeNull: null = null;
export const typeUndefined: undefined = undefined;
export const typeObject: { id: number; title: string } = {
  id: 1,
  title: 'title',
};
export const typeArray: number[] | string[] | boolean[] | object[] = [];

const TypescriptType = () => {
  // const typeAny: any = 'any';
  // const typeNever: never = 'never';

  // const typeArray: Array<T> = [12];

  const ThrowError = (message: string): never => {
    throw console.error(message);
  };

  useEffect(() => {
    ThrowError('new error');
  }, []);

  return <div>TypescriptType</div>;
};

export default TypescriptType;

// React.FC vs JSX.Element

import React from 'react';

interface IReactFC {
  name: string;
}

// React.FC 是一种generic type ，用来定义function component的type
// 他能给予（） 里面的type
// It accepts a type parameter ，the type of the props object used to specify the component
const ReactFC: React.FC<IReactFC> = ({ name }) => {
  return <div>{name}</div>;
};

// JSX.Elements 
// JSX.Element 不属于component 类型 
// JSX.Element is not a generic type
const JsxElement: () => JSX.Element = () => {
  return <div>name</div>;
};

export { ReactFC, JsxElement };

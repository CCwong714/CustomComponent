export const myVariable: undefined = undefined;
export const nonNullableVariable: string = myVariable!; // <---- 使在这里用 ! 
//= ! 操作符表示non-nullable，typescript将不会再对此检查null或者 undefined ,但你需要确保 myVariable 不为 null 或者undefined

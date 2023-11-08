// Type Predicate
// 使用 Type Predicate 的方式更加安全并且code会更简洁一点。
// 更推荐使用Type Predicate 因为他提供了更严格的type checking ，这有助于减少我们coding 的 error


//@ 第一种方式
// 通过isString来检测了 x 的type ，并且typescript知道 
// if(isString(x)) 中的 x 是string ，这样能更安全的使用toUpperCase() 了
// 这方式提供了更严格的type检查 和简洁的code 
// 并且这个方法可以reuse 就减少了其他地方再写的必要
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function example(x: unknown) {
  if (isString(x)) {
    // We can now call any 'string' method on 'x'.
    x.toUpperCase();
  } else {
    console.log(x);
  }
}


//@ 第二种方法
// 这种方式呢是在if里面直接使用 typeof === "string" ,
// 这方式虽然也能work 但是type的系统不是自动识别x的type 
// 所以你需要添加更详细的checking 或者 condition来让typescript 知道 x的typescript
// 这可能导致你的code 出现error ，而且code 看起来会有一点乱
export function example2(x: unknown) {
  if (typeof x === 'string') {
    console.log(x.toUpperCase());
  } else {
    console.log(x);
  }
}

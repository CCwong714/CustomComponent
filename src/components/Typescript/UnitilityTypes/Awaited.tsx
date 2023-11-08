//- Awaited
//- Awaited 通常与 Promise 一起使用，因为它主要目的是用于获取 await 之后 Promise resolve 的 value。
//- Awaited 是用于确定 await return 的 type，等待一个 Promise resolve 的 value。
// 这有助于你在异步代码（asynchronous code）中更好的control type，并确保code type的安全性。
// 但它不一定只能与 Promise 一起使用 （ 除非你有必要的理由不然不介意单独使用 ）

async function fetchData(): Promise<number> {
  return 42;
}

async function processData() {
  const result: Awaited<ReturnType<typeof fetchData>> = await fetchData();
  console.log(result);
}

processData();
// output :42

// 不使用的情况
// 个人觉得其实这样用不用都没差
export type C = Awaited<boolean | number>;



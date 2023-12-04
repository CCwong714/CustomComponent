import React from 'react';

// const testing: Signal<null | Array<number | string | boolean | number[]>> =
//   signal(null);
// // console.log(testing.value);
// testing.value = [1, 2, '3', 4, false, 5, 6, 7, [1, 2, 3]];
// // console.log(testing.value);
// effect(() => {});

const App: React.FC = () => {
  function climbStairs(n: number): number {
    if (n <= 2) {
      return n;
    }

    const dp: number[] = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
  }

  return (
    <div className='mx-8 flex flex-col gap-2 items-center justify-center w-[100vw] h-[100vh]'>
      {climbStairs(45)}
    </div>
  );
};

export default App;

// Non Assertion Usage
// 当你却行那个type 是有value的不是 null 或者undefined
// 但是系统判定为 null 或undefined的时候 你就能使用
// 使用请谨慎 因为他会避开typescript的检测

import { useState } from 'react';
const NonAssertionUsage = () => {
  const [testing, setTesting] = useState<string>('');
  const isUndefined = undefined;
  // const isNull = null;
  // const isNumber = 1234;
  const handleSumbit = () => {
    setTesting(isUndefined!); // ✅
    // setTesting(isNull!); ✅
    // setTesting(isNumber!); ❌
  };
  console.log(testing); // output undefined 
  return (
    <button type='button' onClick={handleSumbit}>
      Non Assertion Usage
    </button>
  );
};

export default NonAssertionUsage;




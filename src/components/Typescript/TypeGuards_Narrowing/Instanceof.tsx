/* eslint-disable @typescript-eslint/no-explicit-any */
// instanceof operator
// 来辩别用 前者是不是使用后者
// 一般用于class

class Bird {
  fly() {
    console.log('flying...');
  }
  layEggs() {
    console.log('laying eggs...');
  }
}

const pet = new Bird();

// instanceof
if (pet instanceof Bird) {
  pet.fly();
} else {
  console.log('pet is not a bird');
}

// ----------------------------------------------------------------
// 以下看上去相似但并不属于使用前者
function MyFunction() {}
const myFunc = () => {};

if (myFunc instanceof MyFunction) {
  console.log('myFunc is MyFunction example? this won’t work!');
}

function MyNewFunction() {}
const myNewFunc = MyNewFunction;

if (myNewFunc instanceof MyNewFunction) {
  console.log('myNewFunc is MyNewFunction example? this won’t work!');
}
console.log(myNewFunc instanceof MyNewFunction);


// ----------------------------------------------------------------
// 如果这么实用他将会error
// Uncaught TypeError: Right-hand side of 'instanceof' is not callable
const time: any = {};
const copy: any = time;

if (copy instanceof time) {
  console.log('123');
}

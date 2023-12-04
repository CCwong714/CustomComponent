// Two Sum
export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }

  return [];
}


// function twoSum(nums: number[], target: number): number[] {
//   const numIndices = {};

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (numIndices.hasOwnProperty(complement)) {
//       return [numIndices[complement], i];
//     }

//     numIndices[nums[i]] = i;
//   }
//   return [];
// }

//  Remove Duplicates from Sorted Array

export function removeDuplicates(nums: number[]): number {
  const num = nums;
  const t: number[] = [];
  num.forEach((items) => {
    const findTest = t.filter((i) => i === items);
    if (findTest.length === 0) {
      t.push(items);
    }
  });

  for (let i = 0; i <= t.length; i++) {
    nums[i] = t[i];
  }

  return t.length;
}

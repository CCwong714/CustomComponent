// Search Insert Position
export function searchInsert(nums: number[], target: number): number {
  const pos = nums.indexOf(target);
  let returnPos = 0;
  if (pos < 1) {
    nums.push(target);
    nums.sort(function (a, b) {
      return a - b;
    });
    returnPos = nums.indexOf(target);
  }

  return pos >= 0 ? pos : returnPos;
}

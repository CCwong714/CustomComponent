// Permutations
export function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  function backtrack(start: number = 0): void {
    if (start === nums.length - 1) {
      result.push([...nums]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }
  backtrack();

  return result;
}

export function permute2(nums: number[]): number[][] {
  const result: number[][] = [];
  function backtrack(start: number = 0): void {
    if (start === nums.length - 1) {
      result.push([...nums]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }
  backtrack();
  return result;
}

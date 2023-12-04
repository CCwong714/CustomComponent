// Remove Element

export function removeElement(nums: number[], val: number): number {
  const num = nums;
  const t: number[] = num.filter((i) => i !== val);
  console.log(t);
  nums.length = 0;
  nums.push(...t);

  return t.length;
}

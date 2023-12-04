// Plus One
export function plusOne(digits: number[]): number[] {
  const copy = digits.join('');
  const slice = String(BigInt(copy) + 1n)
    .split('')
    .map(Number);

  return slice;
}

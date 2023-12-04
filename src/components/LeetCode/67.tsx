//  Add Binary
export function addBinary(a: string, b: string): string {
  const newA = BigInt('0b' + a);
  const newB = BigInt('0b' + b);
  const total = newA + newB;
  const ans = total.toString(2);

  return ans;
}

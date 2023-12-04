// Longest Common Prefix
export function longestCommonPrefix(strs: string[]): string {
  if (strs.length < 2 || strs[0] === '') {
    return strs[0];
  }
  let output = '';

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return output;
      }
    }
    output += char;
  }

  return strs[0];
}

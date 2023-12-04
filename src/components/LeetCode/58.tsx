// Length of Last Word
export function lengthOfLastWord(s: string): number {
  const word = s.trim().split(' ');
  return word[word.length - 1].length;
}

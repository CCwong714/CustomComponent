// Find the Index of the First Occurrence in a String
export function strStr(haystack: string, needle: string): number {
  if (!haystack || !needle) {
    return -1;
  }
  const test = haystack.indexOf(needle);
  return test;
}

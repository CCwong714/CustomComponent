export function currencyFormat(
  num: number,
  decimalPlaces: number = 2,
  currencySymbol: string = '$'
): string {
  const fixedNumber = num.toFixed(decimalPlaces);
  const parts = fixedNumber.split('.');
  const integerPart = parts[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  const formattedNumber =
    parts.length > 1 ? `${integerPart}.${parts[1]}` : integerPart;
  return `${currencySymbol}${formattedNumber}`;
}

// Example :
// const price = currencyFormat(5678.9, 0, '€');

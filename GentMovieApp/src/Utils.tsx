export function convertPriceToNumber(price: string): number {
    const withoutCommas = price.replace(/,/g, '');
    return parseFloat(withoutCommas);
  }
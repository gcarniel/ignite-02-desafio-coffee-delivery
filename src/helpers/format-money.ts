export function moneyFormat(value: number | string) {
  return Number(value).toFixed(2).replace('.', ',')
}

export const getRandom = (min: number, max: number) => {
  return parseFloat((Math.random() * (max-min) + min).toFixed(2))
}
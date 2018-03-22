import { getRandomIntInclusive } from './random';  // static

export function randomCssColor() {
  const r = getRandomIntInclusive(0, 255);
  const g = getRandomIntInclusive(0, 255);
  const b = getRandomIntInclusive(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

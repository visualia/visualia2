/*
 * @param h Hue value from 0 to 360 (can be more)
 * @param s Saturation value from 0 to 100
 * @param l Lightness value from 0 to 100, defaults to 50
 * @param a Alpha value from 0 to 1, defaults to 1
 *
 * @returns {string} CSS hsla() string value
 */
export function hsl(h = 0, s = 100, l = 50, a = 1) {
  return `hsl(${h},${s}%,${l}%,${a})`;
}

export const hsla = hsl;

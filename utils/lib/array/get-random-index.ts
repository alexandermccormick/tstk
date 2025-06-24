/**
 * Get an random index of a given array.
 *
 * @example Usage
 * ```ts
 * import { getRandomIndex } from "@tstk/utils";
 *
 * const myArr = [1, 2, 3, 4];
 *
 * const idx = getRandomIndex(myArr);
 *
 * console.log(idx); // prints 2;
 * ```
 * @module
 */

/**
 * The callback function used to filter items from an array.
 *
 * @returns A random index of a given array.
 */
export function getRandomIndex(arr: Array<unknown>): number {
  return Math.floor(Math.random() * arr.length);
}

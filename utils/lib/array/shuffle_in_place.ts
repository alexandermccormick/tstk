/**
 * Shuffles the elements of an array in place.
 *
 * @example Usage
 * ```ts
 * import { shuffleInPlace } from "@tstk/utils";
 *
 * const myArr = [1, 2, 3, 4];
 *
 * shuffleInPlace(myArr);
 *
 * console.log(myArr); // prints [3, 2, 4, 1];
 * ```
 * @module
 */

/**
 * Shuffles the elements of an array in place.
 *
 * @param array - The array to shuffle.
 *
 * @returns The shuffled array.
 *
 * @example Usage
 * ```ts
 * import { shuffleInPlace } from "@tstk/utils";
 *
 * const myArr = [1, 2, 3, 4];
 *
 * shuffleInPlace(myArr);
 *
 * console.log(myArr); // prints [3, 2, 4, 1];
 * ```
 */
export function shuffleInPlace<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

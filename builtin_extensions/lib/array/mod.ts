/**
 * An extended implimentation of the "Array" built-in object.
 *
 * ```ts
 * const myArr = new XArray();
 * myArr.push(1, 2, 3, 4);
 * console.log(myArr); // XArray(4) [ 1, 2, 3, 4 ]
 *
 * const otherHandle = myArr.filterInPlace(value => value % 2 === 0);
 * console.log(myArr === otherHandle); // true
 * console.log(otherHandle); // XArray(2) [ 2, 4 ]
 * console.log(myArr); // XArray(2) [ 2, 4 ]
 * ```
 * @module
 */

import { filterInPlace, type FilterPredicate } from "@tstk/utils/array";
/**
 * An extended implimentation of the "Array" built-in object.
 */
export class XArray<T> extends Array<T> {
  /**
   * Removes the elements of an array that do not meet the condition specified in a callback function.
   * @param predicate - A function that accepts up to three arguments. The filterInPlace method calls the predicate function one time for each element in the array.
   */
  filterInPlace(predicate: FilterPredicate<T>): this {
    filterInPlace(this, predicate);
    return this;
  }
}

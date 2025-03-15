import { filterInPlace, type FilterPredicate } from "@tstk/utils/array";
/**
 * An extended implimentation of the "Array" builtin
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

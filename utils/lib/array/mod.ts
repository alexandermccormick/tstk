/**
 * Array utilities
 *
 * @example Usage
 * ```ts
 * import { filterInPlace } from "@tstk/utils";
 *
 * const myArr = [1, 2, 3, 4];
 *
 * filterInPlace(myArr, (value) => value % 2 === 0);
 *
 * console.log(myArr); // prints [2,4];
 * ```
 *
 * @module
 */
export * from "./filter_in_place.ts";

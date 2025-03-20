/**
 * A collection of generic and universal utilities
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

export * from "./lib/array/mod.ts";
export * from "./lib/interval/mod.ts";

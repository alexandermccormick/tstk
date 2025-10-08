/**
 * Casts a varaible and passes it to the defined callback.
 *
 * @example Usage
 * ```ts
 * import { cast } from "@tstk/utils";
 *
 * const value: number = 10;
 * const myStr = cast<string>(value, (value) => {
 *  return value + " is a number"; // This works because numbers are coerced into strings automatically
 * })
 *
 * console.log(myStr); // prints "10 is a number";
 * ```
 * @module
 */

/**
 * Cast a varaible and pass it to the defined callback.
 *
 * @param item - The item to cast.
 * @param cb - The callback to pass the casted item to.
 *
 * @return The result of the callback or void if the callback does not return anything.
 */
export function cast<T, V = T>(item: unknown, cb: (item: V) => T): T | void {
  return cb(item as unknown as V);
}

/**
 * A collection of classes extending the functionality of standard built-in objects
 *
 * Array:
 * @example
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
 *
 * Map:
 * @example
 * ```ts
 * const myValue: Array<[string, number]> = [["mykey", 0]];
 * const oldMap = new Map<string, number>(myValue); // Map(1) { "mykey" => 0 }
 * const myMap = new XMap<string, number>(myValue); // XMap(1) [Map] { "mykey" => 0 }
 *
 * if (oldMap.has("mykey")) {
 *   // TypeError: Type "number | undefined" is not assignable to type "number"
 *   let _a: number = oldMap.get("mykey"); // number
 * }
 *
 * if (myMap.has("mykey")) {
 *   // Known existing keys will return accurate types
 *   let _b: number = myMap.get("mykey");
 * }
 * ```
 *
 * @module
 */
export * from "./lib/array/mod.ts";
export * from "./lib/map/mod.ts";

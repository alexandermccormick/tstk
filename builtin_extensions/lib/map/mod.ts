/**
 * An extension of the Map built-in object.
 *
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
 * @module
 */

/**
 * An extension of the Map built-in object.
 */
export interface XMap<K, V> extends Map<K, V> {
  /**
   * @returns - boolean indicating whether an element with the specified key exists or not.
   */
  has<P extends K>(key: P): this is { get(key: P): V } & this;
}

/**
 * An extension of the Map built-in object.
 */
export class XMap<K, V> extends Map<K, V> {}

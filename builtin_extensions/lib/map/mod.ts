/*
 * This is a bit of a typescript hack to avoid having to add the
 * non-null assertion operator on calls to the "get" method after verifying
 * the key exists with the "has" method
 *
 * Example:
 *
 *  Regular Map:
 *    const myMap = new Map<string, number>();
 *    myMap.set("mykey", 0);
 *
 *    if (myMap.has("mykey")) {
 *      return myMap.get("mykey"); // Object is possibly undefined
 *    }
 *
 *  XMap:
 *    const myMap = new XMap<string, number>();
 *    myMap.set("mykey", 0);
 *
 *    if (myMap.has("mykey")) {
 *      return myMap.get("mykey"); // number
 *    }
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

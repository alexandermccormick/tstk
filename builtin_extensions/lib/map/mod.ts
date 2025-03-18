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
export interface XMap<K, V> extends Map<K, V> {
  has<P extends K>(key: P): this is { get(key: P): V } & this;
}

/**
 * An extension of the Map built-in object.
 */
export class XMap<K, V> extends Map<K, V> {}

const myValue: Array<[string, number]> = [["mykey", 0]];
const oldMap = new Map<string, number>(myValue); // Map(1) { "mykey" => 0 }
const myMap = new XMap<string, number>(myValue); // XMap(1) [Map] { "mykey" => 0 }

if (myMap.has("mykey")) {
  let _a: number = myMap.get("mykey"); // number
}

if (oldMap.has("mykey")) {
  let _b: number = oldMap.get("mykey"); // number
}

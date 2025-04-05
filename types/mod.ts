/**
 * A collection of universal type utilities
 *
 * @example Usage
 * ```ts
 * import { Concrete } from "@tstk/types";
 *
 * interface User {
 *   email: string;
 *   phone?: string;
 * }
 *
 * type CallableUser = Concrete<User>; // type CallableUser = {
 *                                     //   email: string,
 *                                     //   phone: string
 *                                     // };
 * ```
 *
 * @module
 */

/**
 * Get the element type of a typed array
 *
 * @example Usage
 * ```ts
 * import { ArrayElement } from "@tstk/types";
 *
 * const myArr = [{ name: "alex", age: 31 }, { name: "alice", age: 27}];
 *
 * const matchingElement: ArrayElement<typeof myArr> = {
 *   name: "bob",
 *   age: "40"  // Type Error: string is not assignable to type 'number'
 * };
 * ```
 */
export type ArrayElement<T> = T extends (infer Element)[] ? Element : never;

/**
 * Make all properties in T required
 *
 * @example Usage
 * ```ts
 * import { Concrete } from "@tstk/types";
 *
 * interface User {
 *   email: string;
 *   phone?: string;
 * }
 *
 * type CallableUser = Concrete<User>; // type CallableUser = {
 *                                     //   email: string,
 *                                     //   phone: string
 *                                     // };
 * ```
 */
export type Concrete<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Returns the type of Object property values
 *
 * @example Usage
 * ```ts
 * import { ValueOf } from "@tstk/types";
 *
 * const a = { age: 19 } as const;
 * const b: ValueOf<typeof a> = 18; // Error: Type '18' is not assignable to '19'
 *
 * const c = { age: 19 };
 * const d: ValueOf<typeof a> = ""; // Error: Type 'string' is not assignable to type 'number'
 * ```
 */
export type ValueOf<T> = T[keyof T];

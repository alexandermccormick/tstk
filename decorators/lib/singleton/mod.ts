/**
 * Extends a given class to ensure there is only ever a single instance.
 *
 * @example Singleton
 * ```ts
 * import { Singleton } from "@tstk/decorators"
 *
 * \@Singleton
 * class Example {}
 *
 * const instance1 = new Example()
 * const instance2 = new Example()
 * console.log(instance1 === instance2) // prints `true`
 * ```
 *
 * @module
 */

/**
 * A unique symbol used to define and access the instance field of a singleton class
 *
 * @example Usage
 * ```ts
 * import { Singleton, SINGLETON_KEY } from "@tstk/decorators"
 *
 * \@Singleton
 * class Example {}
 *
 * const instance = new Example()
 * console.log(Example[SINGLETON_KEY] === instance) // prints `true`
 * ```
 */
export const SINGLETON_KEY: unique symbol = Symbol();

/**
 *  Type definition for Singleton decorator to ensure proper lsp support.
 */
// deno-lint-ignore no-explicit-any
export type Singleton<T extends new (...args: Array<any>) => any> =
  & T
  & {
    // deno-lint-ignore no-explicit-any
    [SINGLETON_KEY]: T extends new (...args: Array<any>) => infer I ? I
      : never;
  };

/**
 * Extends a given class to ensure there is only ever a single instance.
 *
 * @example Usage
 * ```ts
 * import { Singleton } from "@tstk/decorators"
 *
 * \@Singleton
 * class Example {}
 *
 * const instance1 = new Example()
 * const instance2 = new Example()
 * console.log(instance1 === instance2) // prints `true`
 * ```
 */
// deno-lint-ignore no-explicit-any
export function Singleton<T extends new (...args: Array<any>) => any>(
  type: T,
): T {
  return new Proxy(type, {
    construct(target: Singleton<T>, argsList, newTarget) {
      // Skip the children
      if (target.prototype !== newTarget.prototype) {
        return Reflect.construct(target, argsList, newTarget);
      }

      if (!target[SINGLETON_KEY]) {
        target[SINGLETON_KEY] = Reflect.construct(target, argsList, newTarget);
      }

      return target[SINGLETON_KEY];
    },
  });
}

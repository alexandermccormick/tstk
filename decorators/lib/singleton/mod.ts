const SINGLETON_KEY = Symbol();

// deno-lint-ignore no-explicit-any
export type Singleton<T extends new (...args: Array<any>) => any> =
  & T
  & {
    // deno-lint-ignore no-explicit-any
    [SINGLETON_KEY]: T extends new (...args: Array<any>) => infer I ? I
      : never;
  };

/**
 *  Extends a given class to ensure there is only ever a single instance
 */
// deno-lint-ignore no-explicit-any
export function Singleton<T extends new (...args: Array<any>) => any>(
  type: T,
) {
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

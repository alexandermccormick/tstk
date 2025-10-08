/**
 * A method decorator to ensure it may only be executed once.
 *
 * @example Singleton
 * ```ts
 * import { SingleUse } from "@tstk/decorators"
 *
 * class Example {
 *  \@SingleUse
 *  myMethod() {
 *    return "Hello, World!";
 *  }
 * }
 *
 * const example = new Example();
 * console.log(example.myMethod()) // prints "Hello, World!"
 * console.log(example.myMethod()) // prints undefined
 * ```
 *
 * @module
 */

/**
 * A method decorator to ensure it may only be executed once.
 *
 * @example Singleton
 * ```ts
 * import { SingleUse } from "@tstk/decorators"
 *
 * class Example {
 *  \@SingleUse
 *  myMethod() {
 *    return "Hello, World!";
 *  }
 * }
 *
 * const example = new Example();
 * console.log(example.myMethod()) // prints "Hello, World!"
 * console.log(example.myMethod()) // prints undefined
 * ```
 */
export function SingleUse<
  // deno-lint-ignore no-explicit-any
  T extends (this: C, ...args: any[]) => any,
  C,
>(
  originalMethod: T,
  _context: ClassMethodDecoratorContext<C, T>,
): (this: C, ...args: Parameters<T>) => ReturnType<T> {
  let used = false;

  const replacementMethod: (this: C, ...args: Parameters<T>) => ReturnType<T> =
    function (this: C, ...args: Parameters<T>): ReturnType<T> {
      if (!used) {
        const result = originalMethod.call(this, ...args);
        if (result instanceof Promise) {
          return result.finally(() => {
            used = true;
          }) as ReturnType<T>;
        } else {
          used = true;
          return result;
        }
      } else {
        return undefined as ReturnType<T>;
      }
    };
  return replacementMethod;
}

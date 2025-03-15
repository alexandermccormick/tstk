/**
 * The callback function used to filter items from an array.
 * @param value - The value to evaluate.
 * @param index - The index of the value being evaluated.
 * @param array - The array which contains the value being evaluated.
 */
export type FilterPredicate<T> = (
  value: T,
  index: number,
  array: Array<T>,
) => boolean;

/**
 * Removes the elements of an array that do not meet the condition specified in a callback function.
 * @param array - The array to filter.
 * @param predicate - A function that accepts up to three arguments. The predicate function is called one time for each element in the array.
 */
export function filterInPlace<T>(
  array: Array<T>,
  predicate: FilterPredicate<T>,
): Array<T> {
  let i = 0;
  let j = 0;

  while (i < array.length) {
    const val = array[i];

    if (predicate(val, i, array)) {
      array[j++] = val;
    }

    i++;
  }

  array.length = j;
  return array;
}

import { assertEquals } from "@std/assert";
import { filterInPlace, shuffleInPlace } from "./mod.ts";

Deno.test("Utility Functions: Array", async (t) => {
  await t.step("Filter In Place", () => {
    const arr = [1, 2, 3, 4];

    const result = filterInPlace(arr, (value) => value % 2 === 0);
    assertEquals(arr.length === 2, true);
    assertEquals(arr[0], 2);
    assertEquals(arr[1], 4);
    assertEquals(arr, result);
  });

  await t.step("Shuffle In Place", () => {
    const arr = [1, 2, 3, 4];
    shuffleInPlace(arr);

    assertEquals(arr.length === 4, true);
    assertEquals(arr.includes(1), true);
    assertEquals(arr.includes(2), true);
    assertEquals(arr.includes(3), true);
    assertEquals(arr.includes(4), true);
  });
});

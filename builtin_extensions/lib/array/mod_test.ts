import { assertEquals } from "@std/assert";
import { XArray } from "./mod.ts";

Deno.test("Extended Array", async (t) => {
  await t.step("Instanceof Array", () => {
    const xarr = new XArray();

    assertEquals(xarr instanceof Array, true);
  });

  await t.step("Filter In Place", () => {
    const xarr = new XArray(1, 2, 3, 4);
    const onlyEven = [2, 4];

    xarr.filterInPlace((value) => value % 2 === 0);
    assertEquals(xarr.length === 2, true);
    assertEquals(xarr[0], onlyEven[0]);
    assertEquals(xarr[1], onlyEven[1]);
  });
});

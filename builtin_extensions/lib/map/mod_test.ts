import { assertEquals } from "@std/assert";
import { XMap } from "./mod.ts";

Deno.test("Extended Map", async (t) => {
  await t.step("Instanceof Map", () => {
    const xmap = new XMap();

    assertEquals(xmap instanceof Map, true);
  });

  // This test is for types only. Should this test fail, the
  // file will not even run.
  await t.step('"has" is type safe', () => {
    const xmap = new XMap<string, number>([["one", 1], ["two", 2]]);

    function _typeSafe(): number {
      if (xmap.has("one")) {
        return xmap.get("one");
      }
      return 0;
    }
    assertEquals(true, true);
  });
});

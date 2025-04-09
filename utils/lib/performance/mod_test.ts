import { assertInstanceOf } from "@std/assert";
import { QuickTime } from "./mod.ts";

function lengthyFunc() {
  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
}

Deno.test("Utility: QuickTime", async (t) => {
  await t.step("Filter In Place", async () => {
    const qt = new QuickTime("Test");
    await lengthyFunc();
    qt.log();
    assertInstanceOf(qt, QuickTime);
  });
});

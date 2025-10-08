import { assertEquals } from "@std/assert";
import { SingleUse } from "./mod.ts";

class Thing {
  @SingleUse
  action() {
    return "Hello, World!";
  }
}

Deno.test("Decorator: SingleUse", () => {
  const thing = new Thing();

  assertEquals(thing.action(), "Hello, World!");
  assertEquals(thing.action(), undefined);
});

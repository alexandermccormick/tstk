import { assertEquals } from "@std/assert";
import { cast } from "./mod.ts";

Deno.test("Utility Functions: Cast", () => {
  const value: number = 10;
  const myStr = cast<string>(value, (value) => value + " is a number");

  assertEquals(myStr, "10 is a number");
});

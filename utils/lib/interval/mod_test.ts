import { assertEquals } from "@std/assert";
import { Interval } from "./mod.ts";

Deno.test("Utility Class: Interval", async () => {
  const a = new Interval(() => int++, 100);
  let int = 0;

  a.start();
  const cached = await (new Promise<number>((resolve) => {
    setTimeout(() => {
      // Assert active
      assertEquals(a.isActive, true);
      // Assert callback running
      assertEquals(int > 0, true);
      a.stop();
      resolve(int);
    }, 500);
  }));

  await (new Promise<void>((resolve) => {
    setTimeout(() => {
      // Assert interval has stoped
      assertEquals(int, cached);
      resolve();
    }, 500);
  }));
});

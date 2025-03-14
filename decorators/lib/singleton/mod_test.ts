import { assertEquals } from "@std/assert";
import { Singleton } from "./mod.ts";

Deno.test(function singletonTest() {
  @Singleton
  class SingletonTest {
    value: number = 10;
  }

  const a = new SingletonTest();
  const b = new SingletonTest();

  a.value = 20;

  assertEquals(a.value, b.value);
});

Deno.test("Decorator: Singleton", async (t) => {
  @Singleton
  class SingletonTest {
    constructor(public value?: Array<unknown>) {}
  }

  await t.step("Maintains single instance", () => {
    const a = new SingletonTest([1, 2, "a", "b", { name: "notsure" }]);
    const b = new SingletonTest();

    assertEquals(a.value, b.value);
  });

  await t.step("Retains instanceof original class", () => {
    const a = new SingletonTest();

    assertEquals(a instanceof SingletonTest, true);
  });

  await t.step("Is not instanceof Singleton decorator/class", () => {
    const a = new SingletonTest();

    assertEquals(a instanceof Singleton, false);
  });
});

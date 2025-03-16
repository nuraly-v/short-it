import { assertEquals } from "jsr:@std/assert";
import { multiply } from "./b.ts";

Deno.test(function testMultiply() {
  assertEquals(multiply(2, 2), 4);
  assertEquals(multiply(2, 3), 6);
  assertEquals(multiply(2, 4), 8);
});

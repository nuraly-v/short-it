import { theCat } from "./a.ts";
import { toCamelCase } from "jsr:@std/text";

export function multiply(a: number, b: number): number {
  return a * b;
}

console.log(toCamelCase(`We are the ${theCat()}`));

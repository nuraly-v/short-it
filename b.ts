import { theCat } from "./a.ts";
import { toCamelCase } from "jsr:@std/text"



console.log(toCamelCase( `We are the ${theCat()}`));
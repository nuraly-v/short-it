import { invertBy } from "jsr:@std/collections"

const record = {a: 'x', b: 'y', c: 'z'};

console.log(invertBy(record, key => key))
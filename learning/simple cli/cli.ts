// console.log(Deno.args)

import { parseArgs } from "jsr:@std/cli/parse-args";
import { bgGreen, red } from "jsr:@std/fmt/colors";

const flags = parseArgs(Deno.args, {
  boolean: ["help", "version"],
  string: ["name"],
  default: { text: "Whats up?" },
});

if (flags.help) {
  console.log(`
  Usage
    $ deno run
  Options
    --help      Display this message
    --version   Display the version
    --name      Your name
  `);
}

if (flags.version) {
  console.log("1.0.0");
}

const age = prompt("How old are you?");
if (parseInt(age!) < 18) {
  console.log(red("You are not old enough to use this program."));
  Deno.exit(1);
}

console.log(bgGreen("\nAccess Granted\n"));

const shouldContinue = confirm("Do you want to continue? (y/n)");

if (!shouldContinue) {
  console.log("Goodbye!");
  console.log(flags.text);
  Deno.exit(0);
}

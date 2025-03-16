export function helloWorld() {
  import.meta.main;
  console.log('Main?', import.meta.main)
  return "Hello, World!"
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const derte = import.meta.filename
  console.log(helloWorld())
  console.log(derte)
}



let i = 0;

setInterval(() => {
  console.log(i++);
}, 100);
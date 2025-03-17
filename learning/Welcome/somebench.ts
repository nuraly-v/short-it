function theBigFor(arr: number[]) {
  let thesum = 0;

  for (let i = 0; i < arr.length; i++) {
    thesum += arr[i];
  }

  return thesum;
}

const lAr1 = Array.from({ length: 100 }, (_, i) => i);
const lAr2 = Array.from({ length: 1000 }, (_, i) => i);
const lAr3 = Array.from({ length: 10000 }, (_, i) => i);
const lAr4 = Array.from({ length: 100000 }, (_, i) => i);
const lAr5 = Array.from({ length: 1000000 }, (_, i) => i);
const lAr6 = Array.from({ length: 10000000 }, (_, i) => i);

Deno.bench({
  name: "theBigFor 100",
  baseline: true,
  fn: () => {
    theBigFor(lAr1);
  },
});

Deno.bench({
  name: "theBigFor 1000",
  fn: () => {
    theBigFor(lAr2);
  },
});

Deno.bench({
  name: "theBigFor 10000",
  fn: () => {
    theBigFor(lAr3);
  },
});

Deno.bench({
  name: "theBigFor 100000",
  fn: () => {
    theBigFor(lAr4);
  },
});

Deno.bench({
  name: "theBigFor 1000000",
  fn: () => {
    theBigFor(lAr5);
  },
});

Deno.bench({
  name: "theBigFor 10000000",
  fn: () => {
    theBigFor(lAr6);
  },
});

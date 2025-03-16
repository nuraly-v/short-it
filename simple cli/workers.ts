// Web workers API and multi threading in Deno
// Deno provides a Web Workers API for running code in parallel. This is a way to run multiple instances of the same code in parallel. The workers are created using the Worker class and can communicate with the main thread using the postMessage method.

// ts-nocheck no types available

function fibonacci(num: number): number {
    if (num <= 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

fibonacci(43);

// self.onmessage = (e) => {
//     const { n } = e.data;
//     const result = fibonacci(n);

//     self.postMessage(result);
//     self.close();
// }
// Promise Race - first to complete
const p1 = new Promise(resolve => setTimeout(() => resolve("slow"), 2000));
const p2 = new Promise(resolve => setTimeout(() => resolve("fast"), 1000));

Promise.race([p1, p2])
    .then(value => console.log(value));  // "fast"
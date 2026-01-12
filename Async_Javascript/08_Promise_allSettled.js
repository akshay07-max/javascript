// Promise.allSettled - wait for all, regardless of outcome
const promises = [
  Promise.resolve("Success 1"),
  Promise.reject("Error 1"),
  Promise.resolve("Success 2"),
];

Promise.allSettled(promises).then((results) => {
  results.forEach((result) => console.log(result));
  // { status: 'fulfilled', value: 'Success 1' }
  // { status: 'rejected', reason: 'Error 1' }
  // { status: 'fulfilled', value: 'Success 2' }
});

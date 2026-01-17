function asyncTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async task completed");
    }, 1500);
  });
}

asyncTask().then((result) => console.log(result));

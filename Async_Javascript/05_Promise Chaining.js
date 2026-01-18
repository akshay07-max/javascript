function stepOne() {
  return Promise.resolve("Step One Completed");
}

function stepTwo(msg) {
  return Promise.resolve(msg + " → Step Two Completed");
}

stepOne()
  .then((result) => stepTwo(result))
  .then((finalResult) => console.log(finalResult));

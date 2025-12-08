let promise = new Promise((resolve, reject) => {
  let status = true;

  if (status) {
    resolve("Operation success");
  } else {
    reject("Failed");
  }
});

promise.then((result) => {
  console.log(result)
})
  .catch((error) => {
  console.log(error)
  })
  .finally((final) => {
    console.log("Done!!", final)
  })

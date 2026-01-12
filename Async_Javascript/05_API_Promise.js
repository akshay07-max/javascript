function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 1) {
        resolve({ id, name: "Alice" });
      } else {
        reject("Invalid ID");
      }
    }, 1000);
  });
}

fetchUser(1)
    .then((result) => {
    console.log(result)
    })
.catch((error)=> console.log(error))
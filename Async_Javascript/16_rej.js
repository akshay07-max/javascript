function checkIsNumber(input) {
  return new Promise((resolve, reject) => {
    // typeof returns a string, so we compare against "number"
    if (typeof input === "number") {
      resolve(`Success: ${input} is a number.`);
    } else {
      reject("Error: The input is not a number.");
    }
  });
}

// How to use it:
checkIsNumber(3)
  .then((message) => console.log(message)) // Runs if resolved
  .catch((error) => console.error(error)); // Runs if rejected

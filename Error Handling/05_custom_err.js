class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
    if (age < 0) {
        throw new ValidationError("Age cannot be less than zero")
    }

    if (age > 150) {
        throw new ValidationError("Age Cannot be greater than 150")
    }

    return age;
}

const getAge = validateAge(12)

console.log(getAge);
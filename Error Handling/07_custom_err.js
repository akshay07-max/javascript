// custom error type
class ValidationError extends Error{
    constructor(message) {
        super(message)
        this.name = "Validation Error"
    }
}

function validateAge(age) {
    if (age < 0) {
        throw new ValidationError("Age should not be negative");
    }

    else if (age > 150) {
        throw new ValidationError("Are you man, no one live this much");
    }
    
    return age;


}

try {
    validateAge(32)
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Validation Error: ", error.message)
    }
    else {
        console.log("Unknown error");
    }
}
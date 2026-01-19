class InvalidStr extends Error {
    constructor(str) {
        super(str);               // Call parent (Error) constructor
        this.name = "InvalidStr"; // Custom error name
    }
}

function validateString(value) {
    if (typeof value !== "string" || value.trim() === "") {
        throw new InvalidStr("Invalid String");
    }
}

try {
    validateString("");
} catch (err) {
    console.log(err.name);    // InvalidStr
    console.log(err.message); // Invalid String
}
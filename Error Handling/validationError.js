class InvalidStr extends Error {
    constructor(str) {
        super(str);               // Call parent (Error) constructor
        this.name = "InvalidStr"; // Custom error name
    }
}
const riskyOperation = (a, b) => {
    if(a === b) {
        console.log("Numbers are equal")
    }
    else {
        console.log("Numbers are not equal")
    }
}

try {
    riskyOperation(3, j);
    console.log("Logged the risky operation")
} catch (err) {
    console.log("Error occurred during risky operation", err);
}
finally {
    console.log("In the finally block of risky operation");
}
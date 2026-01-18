function throwError(a, b) {
    if (b === 0) {
        throw new Error("Cannot divided by Zero")
    }
    return a / b
}

// console.log(throwError(2, 0))

try {
    const division = throwError(20, 2)
    console.log("division",division);
}
catch (err) {
    console.log(err.message);
}
finally {
    console.log("done")
}


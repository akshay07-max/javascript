function throwError(a, b) {
    if (b === 0) {
        throw new Error("Cannot divided by Zero")
    }
    return a / b
}

console.log(throwError(2, 0))
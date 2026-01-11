function greet(name = "Guest", greet = "Hello,") {
    return `Hey ${greet} ${name}`
}

console.log(greet())
console.log(greet("Akshay")) // overwriting default parameter
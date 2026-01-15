// The setInterval() function repeatedly runs the same code over and again at regular Intervals

//syntax:
// setInterval(function, duration, param1, param2, ...)

// the first parameter is the code to execute
// second is duration
// argument zero or more


// setInterval(() => {
//     console.log("Logging every 2 seconds")
// }, 2000)


// function greet() {
//     console.log("Hello")
// }


// setInterval(greet, 2000)

function greet(name) {
    console.log(`My name is ${name}`)
}

setInterval(greet, 2000, "Akshay")
// Timeouts and Intervals

// SetTimeout():

// - The setTimeout() function executes a particular block of code once after a specific time has elapsed.
// eg:

console.log("Start of the code");

setTimeout(() => {
    console.log("I will run after 5 sec")
}, 5000)

console.log("I was the end...")

// Syntax:
// setTimeout(function, duration, param1, param2,...)
// The first parameter is a funcntion to run, or a reference to a function defined elsewhere
// The second parameter is a number representing the duration in milliseconds to wait before executung the code 
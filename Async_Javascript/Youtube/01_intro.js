// Topic covered:
// 1. Timeouts and Intervals
// 2. Callbacks
// 3. Promises
// 4. async await
// 5. Event Loop

// What and why async javscript
// In its most basic form the javascript is synchronous, blocking, single-threaded language.

// Synchronous: 
// If we have two functions which log messages to the console, code executes top down, with only one line executing at any given time.
function a() {
    console.log("A")
}

function b() {
    console.log("B")
}

a()
b()

// logs a and then b

// Blocking
// No matter how long a previous process takes, the subsquent processes won't kick off until the former is completed

// If func a had to execute an intensive chunk of code, JS has to finish that without moving on to function b. Even if that code takes 10 sec or a min.
// eg. no responds of any website on the browser.

// Single Treaded:
// A thread is a simple a process that js pragram can use to run a task.
// Each thread can do one task at a time.
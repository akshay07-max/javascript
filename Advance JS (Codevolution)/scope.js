// Block scope variables - variables declared inside a pair of curly braces cannot be accessed from outside.

// Function scoped - Variables declared inside the function cannot be accessed from the outside of the function.

// Global Scoped - Globally Scoped Variables can be accessed inside a block or function.

let a = 10;

function outer() {
    let b = 20;
    function inner() {
        let c = 30;
        console.log(a, b, c);
    }
    inner()
    console.log("Trying to get var c outside the block..", c)  // throw an error c is not defined.
}

outer()


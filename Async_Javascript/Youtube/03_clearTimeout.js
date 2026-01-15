// to cancel setTimeout() :
// To clear timeout, you can use the clearTimeout() passing in the identifier returned by the setTimeout as a parameter.

function greet() {
    console.log("Hello");
}

const timeOutId = setTimeout(greet, 2000, "Vishwas")

clearTimeout(timeOutId); // nothing is logged out to the console.

// more practical scenario is clearing timeouts when the component is unmounting to free up the resources and also prevent code from incorrectly executing on an unmounted component.


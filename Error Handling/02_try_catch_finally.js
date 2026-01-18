// try {
//     // here we write the code that might throw error or returns a response
// }
// catch (error) {
//     // If any error occurred in the try block then the catch block get executed and returns an error.
// }
// finally {
    // the finally block executed always after all the process is completed
    // clean up
// }

// eg:

let age = -1

try {
    if (age >= 18) {
        console.log("Ohh adult");
    }
} catch (error) {

        console.log("Error", error);

}
finally {
    console.log("Done");
}



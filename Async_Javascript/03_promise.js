const promise = new Promise((resolve, reject) => {
    const success = false

    setTimeout(() => {
        if (success) {
            resolve("Ohh great")
        }
        else {
            reject("Not Good")
        }
    }, 3000)
})

promise
    .then((result) => {
        console.log(result)
    return "Next Step"
    })
    .then(result => {
        console.log(result)
    })
    .catch((err) => console.log(err))
    .finally(() => {
        console.log("Clean Up")
    })
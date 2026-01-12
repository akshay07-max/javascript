// Async function always return a promise

async function fetchData2() {
    return "Hello"
}

fetchData2().then(data => console.log(data))



// await: pause the execution until the promise resolves.

async function getData() {
    const getData1 = await fetchData2()
    console.log(getData1)
    const getData2 = await fetchData2()
    console.log(getData2)
}

getData()


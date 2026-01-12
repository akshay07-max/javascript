const getData = new Promise((res, rej) => {
    const data = {
        name: "Akashay",
        surname: "Surase",
        fullName: function(){
            return `My name is ${this.name}, ${this.surname}`
        },
        phone: 7620772377
    }

    setTimeout(() => {
        if (res) {
            console.log(`User Fullname is ${data.fullName()}`)
            console.log(`User Phone ${data.phone}`)
        }
        else {
            rej("No Data Fetched")
        }
    }, 1000)
})

const fetch = getData
    .then((result) => {
                console.log(result)
    })
    .catch((error) => console.log(error))
        
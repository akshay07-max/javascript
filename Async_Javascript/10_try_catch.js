function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id, name: "Alice" });
            } else {
                reject("Invalid ID");
            }
        }, 1000);
    });
}

async function getDataSafely() {
    try {
        const user = await fetchUser(-1)
        console.log(user)
    }
    catch (error) {
        console.log("Error ", error)
    }
    finally {
        console.log("Cleanup")
    }
}

getDataSafely()
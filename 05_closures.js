// closure is a combinations of the functions bundled together with a references to the its surrounding state. the function can access the variable outside its scope even after the outer function executed.

const a  = 10
const outerFunc = () => {
    const b = 32
    const innerFunc = () => {
        const c = 21
        console.log(a, b, c)
    }

    return innerFunc();
}

outerFunc();
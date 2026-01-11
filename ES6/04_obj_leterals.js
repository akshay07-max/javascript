const X2 = 10, Y2 = 20

const obj = {
    X2,             // property shorthand
    Y2,
    method() {
        return this.X2 + this.Y2  // method shorthand
    },
    ["prop" + "name"]: "value"  // computed property names
}

console.log(obj)
console.log(obj.method())
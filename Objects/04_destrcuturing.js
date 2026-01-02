const data = {
    dataType: "Stuff",
    dataFor: "Medical",
    isData: true
}

const { dataType, dataFor } = data;

console.log(dataType);
console.log(dataFor);

// with variable name
const { dataType: dt, dataFor: df } = data

console.log(dt)
console.log(df)


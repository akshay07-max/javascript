function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    }
} 

const double = createMultiplier(2);

console.log(double(3))
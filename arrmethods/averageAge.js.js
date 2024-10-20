function getAverageAge(users) {
    let allAge = users.reduce((sum, user) => sum + user.age, 0);
    return allAge / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

module.exports = getAverageAge;

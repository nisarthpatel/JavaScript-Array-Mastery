function groupById(arr) {
    return arr.reduce((item, user) => {
        item[user.id] = user;
        return item;
    }, {});
}

let arr = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

console.log(groupById(arr));

module.exports = groupById;

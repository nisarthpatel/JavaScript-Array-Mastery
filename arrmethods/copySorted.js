function copySorted(arr) {
    return arr.slice().sort();
}

// Example usage
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)

module.exports = copySorted;

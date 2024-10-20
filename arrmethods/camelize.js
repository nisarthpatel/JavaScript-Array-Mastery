function camelize(str) {
    return str
        .split("-")
        .map(
            (newWord, index) => (index === 0 ? newWord : newWord[0].toUpperCase() + newWord.slice(1))
        )
        .join("");
}

console.log(camelize("background-color")); // backgroundColor

module.exports = camelize;

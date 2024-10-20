function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
let arr = [1, 2, 3];

let letsShuffle = (shuffle(arr));
console.log(letsShuffle);
let arr1 = ["sun's", "Whispers", "gentle", "blink"];
let arr2 = ["star's", "Laughter", "breeze's", "glimmer"];
let arr3 = ["moon's", "Whispers", "stream's", "blink"];
let arr4 = ["moon's", "Secrets", "gentle", "twinkle"];
let words = [arr1, arr2, arr3, arr4];

let randomNum = Math.floor(Math.random() * words.length);

let word1 = document.getElementById("word1");
word1.innerHTML = words[randomNum][0];

let word2 = document.getElementById("word2");
word2.innerHTML = words[randomNum][1];

let word3 = document.getElementById("word3");
word3.innerHTML = words[randomNum][2];

let word4 = document.getElementById("word4");
word4.innerHTML = words[randomNum][3];

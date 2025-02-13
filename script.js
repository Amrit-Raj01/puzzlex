// List of 100 words (3-8 letters)
const words = [
    "CAT", "DOG", "SUN", "MOON", "STAR", "FISH", "TREE", "BOOK", "BALL", "CAKE",
    "APPLE", "GRAPE", "LEMON", "TIGER", "SNAKE", "HORSE", "EAGLE", "BEACH", "RIVER", "MOUNTAIN",
    "COMPUTER", "KEYBOARD", "MONITOR", "PYTHON", "JAVASCRIPT", "PROGRAM", "DEVELOPER", "CHALLENGE", "SOLUTION", "CREATIVE"
    // Add more words to reach 100
];

// Levels
const levels = {
    Beginner: words.filter(word => word.length >= 3 && word.length <= 4),
    Medium: words.filter(word => word.length >= 5 && word.length <= 6),
    High: words.filter(word => word.length >= 7 && word.length <= 8)
};

let currentLevel = null;
let currentWord = "";
let scrambledWord = "";

// DOM Elements
const beginnerBtn = document.getElementById("beginner");
const mediumBtn = document.getElementById("medium");
const highBtn = document.getElementById("high");
const gameDiv = document.getElementById("game");
const scrambledWordEl = document.getElementById("scrambled-word");
const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const resultEl = document.getElementById("result");

// Event Listeners
beginnerBtn.addEventListener("click", () => startGame("Beginner"));
mediumBtn.addEventListener("click", () => startGame("Medium"));
highBtn.addEventListener("click", () => startGame("High"));
submitBtn.addEventListener("click", checkAnswer);

// Start Game
function startGame(level) {
    currentLevel = level;
    currentWord = levels[level][Math.floor(Math.random() * levels[level].length)];
    scrambledWord = scrambleWord(currentWord);
    scrambledWordEl.textContent = `Scrambled: ${scrambledWord}`;
    gameDiv.classList.remove("hidden");
    resultEl.textContent = "";
    userInput.value = "";
}

// Scramble Word
function scrambleWord(word) {
    return word.split("").sort(() => Math.random() - 0.5).join("");
}

// Check Answer
function checkAnswer() {
    const userAnswer = userInput.value.trim().toUpperCase();
    if (userAnswer === currentWord) {
        resultEl.textContent = "Correct! 🎉";
        drawStar();
        setTimeout(() => {
            startGame(currentLevel);
        }, 1000);
    } else {
        resultEl.textContent = "Incorrect! Try again.";
    }
}

// Star Animation
function drawStar() {
    const canvas = document.getElementById("background");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;

    ctx.fillStyle = "gold";
    ctx.beginPath();
    ctx.moveTo(x, y - 50);
    ctx.lineTo(x + 15, y - 15);
    ctx.lineTo(x + 50, y);
    ctx.lineTo(x + 15, y + 15);
    ctx.lineTo(x, y + 50);
    ctx.lineTo(x - 15, y + 15);
    ctx.lineTo(x - 50, y);
    ctx.lineTo(x - 15, y - 15);
    ctx.closePath();
    ctx.fill();
}

// Background Animation (Sliding Letters)
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const slidingLetters = [];

for (let i = 0; i < 50; i++) {
    slidingLetters.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 1,
        letter: letters[Math.floor(Math.random() * letters.length)]
    });
}

function animateBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 182, 193, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    slidingLetters.forEach(letter => {
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText(letter.letter, letter.x, letter.y);
        letter.x += letter.speed;
        if (letter.x > canvas.width) letter.x = -20;
    });

    requestAnimationFrame(animateBackground);
}

animateBackground();

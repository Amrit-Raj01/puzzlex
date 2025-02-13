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
const lettersContainer = document.getElementById("letters-container");
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
    scrambledWordEl.textContent = `Unscramble the word: ${scrambledWord}`;
    renderLetters(scrambledWord);
    gameDiv.classList.remove("hidden");
    resultEl.textContent = "";
}

// Scramble Word
function scrambleWord(word) {
    return word.split("").sort(() => Math.random() - 0.5).join("");
}

// Render Letters
function renderLetters(word) {
    lettersContainer.innerHTML = "";
    word.split("").forEach((letter, index) => {
        const letterDiv = document.createElement("div");
        letterDiv.className = "letter";
        letterDiv.textContent = letter;
        letterDiv.draggable = true;
        letterDiv.addEventListener("dragstart", dragStart);
        letterDiv.addEventListener("dragover", dragOver);
        letterDiv.addEventListener("drop", drop);
        lettersContainer.appendChild(letterDiv);
    });
}

// Drag and Drop Functions
let draggedLetter = null;

function dragStart(e) {
    draggedLetter = e.target;
    setTimeout(() => e.target.classList.add("hidden"), 0);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    if (e.target.classList.contains("letter")) {
        const parent = lettersContainer;
        const draggedIndex = Array.from(parent.children).indexOf(draggedLetter);
        const targetIndex = Array.from(parent.children).indexOf(e.target);
        if (draggedIndex < targetIndex) {
            parent.insertBefore(draggedLetter, e.target.nextSibling);
        } else {
            parent.insertBefore(draggedLetter, e.target);
        }
    }
    draggedLetter.classList.remove("hidden");
}

// Check Answer
function checkAnswer() {
    const userAnswer = Array.from(lettersContainer.children)
        .map(letter => letter.textContent)
        .join("");
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
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1000);
}

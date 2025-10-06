// Starter JavaScript for Intro to JS Lab

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('convertBtn').addEventListener('click', tempConvert);
  document.getElementById('guessBtn').addEventListener('click', guess);
  document.getElementById('evenOddBtn').addEventListener('click', evenOdd);
  document.getElementById('reverseBtn').addEventListener('click', reverseWord);
  document.getElementById('addBtn').addEventListener('click', addNumbers);
});

// Random number between 0 and 99
const answer = Math.floor(Math.random() * 100);

function tempConvert() {
  const fahrenheit = document.getElementById('numDegrees').value;
  const converted = Math.ceil((fahrenheit - 32) * 5/9);
  document.getElementById('celsiusAnswer').textContent = converted;
}

function guess() {
  const userGuess = document.getElementById('guessNum').value;
  // TODO: compare userGuess to answer and update #guessResponse with 'too high', 'too low', or 'correct'
  let response = '';
  if (userGuess > answer) {
    response = 'Too High';
  }
  if (userGuess < answer) {
    response = 'Too Low';
  }
  if (userGuess == answer) {
    response = 'Correct';
  }
  document.getElementById('guessResponse').textContent = response;
}

function evenOdd() {
  const val = document.getElementById('evenOddNum').value;
  // TODO: determine if val is even or odd and display result in #evenOddResult
  let result = '';
  if (val %2 == 1) {
    result = 'Odd';
  } else {
    result = 'Even';
  }
  document.getElementById('evenOddResult').textContent = result;
}

function reverseWord() {
  const text = document.getElementById('wordInput').value;
  // TODO: reverse text and display in #reversedOutput
  let reversetext = '';
  for (let index = text.length - 1; index >= 0; index--) {
    reversetext += text[index];
  }
  document.getElementById('reversedOutput').textContent = reversetext;
}

function addNumbers() {
  const a = Number(document.getElementById('addA').value);
  const b = Number(document.getElementById('addB').value);
  // TODO: add a and b (as numbers) and display result in #sumOutput
  const result = Number(a + b);
  document.getElementById('sumOutput').textContent = result;
}

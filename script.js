'use strict';

// creating a secret number
let secretNumber = Math.floor(Math.random() * 20 + 1);

// setting the initial counter score
let score = 20;

// setting the initial highscore
let highscore = 0;

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const setScore = document.querySelector('.score');

// event listener on "check" button
const btnCheck = document.querySelector('.check');
btnCheck.addEventListener('click', e => {
  const guess = Number(document.querySelector('.guess').value);

  // if no input value given to check
  if (!guess) {
    message.textContent = 'Enter a Number!';
  } else if (guess === secretNumber) {
    // if the guessed number is equal to secret number
    message.textContent = 'Correct Number!';
    number.textContent = secretNumber;
    document.body.style.backgroundColor = 'green';
    number.style.width = '30rem';

    if (score > highscore) {
      // setting the new highscore value, when correct
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // if the guessed number is not equal
    if (score > 1) {
      message.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      setScore.textContent = score;
    } else {
      message.textContent = 'You lost the game!';
      document.body.style.backgroundColor = 'red';
      setScore.textContent = 0;
    }
  }
});

const btnAgain = document.querySelector('.again');
btnAgain.addEventListener('click', e => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  setScore.textContent = score;
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});

// CODE BEFORE REFACTOR
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

// const btnAgain = document.querySelector('.again');
// btnAgain.addEventListener('click', e => {
//   window.location.reload();
//   });

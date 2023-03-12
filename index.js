let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let playerName = prompt("Enter your name?");
let playerMoney = parseInt(prompt("Enter the money!"));
let playerBet = 0;
playerEl.textContent = playerName + ": $" + playerMoney;

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  playerBet = parseInt(prompt("Enter your bet!"));
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
    playerMoney -= playerBet;
  }
  messageEl.textContent = message;
  playerEl.textContent = playerName + ": $" + playerMoney;
}

function drawCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function getRandomCard() {
  let res = Math.floor(Math.random() * 13) + 1;
  if (res === 1) {
    let forOne = prompt("1 or 11 for ace?");
    let forOneNum = parseInt(forOne);
    if (forOneNum === 1) {
      return 1;
    } else if (forOneNum === 11) {
      return 11;
    } else {
      return "Invalid";
    }
  } else if (res >= 11 && res <= 13) {
    return 10;
  }
  return res;
}

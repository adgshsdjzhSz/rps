const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let computerAnswer;
const computerNumbAnswer = getRandomIntInclusive(1, 3);

const rpsGame = (userAnswer) => {

  if (userAnswer !== 'rock' || userAnswer !== 'paper' || userAnswer !== 'scissors') {
    console.log('okay, i choose smth for ya');
    const randomUserAnswer = getRandomIntInclusive(1, 3);
    switch (randomUserAnswer) {
      case 1: userAnswer = 'rock'; break;
      case 2: userAnswer = 'paper'; break;
      case 3: userAnswer = 'scissors'; break;
  }
}

  switch (computerNumbAnswer) {
    case 1: computerAnswer = 'rock'; break;
    case 2: computerAnswer = 'paper'; break;
    case 3: computerAnswer = 'scissors'; break;
  }
  
  if (computerAnswer === userAnswer) {
    return console.log(`you chose ${userAnswer} and computer chose ${computerAnswer}. Draw!`);
  }

  if (userAnswer === 'rock' && computerAnswer === 'scissors') {
    return console.log(`you chose ${userAnswer} and computer chose ${computerAnswer}. You've won!`);

  } else if (userAnswer === 'paper' && computerAnswer === 'rock') {
    return console.log(`you chose ${userAnswer} and computer chose ${computerAnswer}. You've won!`);

  } else if (userAnswer === 'scissors' && computerAnswer === 'paper') {
    return console.log(`you chose ${userAnswer} and computer chose ${computerAnswer}. You've won!`);
  }

  else return console.log(`you chose ${userAnswer} and computer chose ${computerAnswer}. You've lost((`);
};

console.log(rpsGame('rock'));
console.log(rpsGame('paper'));
console.log(rpsGame('scissors'));
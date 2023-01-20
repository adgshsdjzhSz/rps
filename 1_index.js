const rpsGame = (userVariant) => {
  let strToNumb;
  switch (userVariant) {
    case 'paper': strToNumb = 0;
    case 'rock' : strToNumb = 1;
    case 'scissors' : strToNumb = 2;
    default : console.log('choose your fighter');
  }
  const computerVariant = Math.floor(Math.random(3));
  if (strToNumb === computerVariant) {
  return console.log(`you and computer chose ${userVariant}. Draw!`);
  } else if (strToNumb === 0 && computerVariant === 1) {
    return console.log(`you chose ${userVariant} and computer chose ${computerVariant}. Win!`);
  } else if (strToNumb === 1 && computerVariant === 2) {
    return console.log(`you chose ${userVariant} and computer chose ${computerVariant}. Win!`);
  } else if (strToNumb === 2 && computerVariant === 0) {
    return console.log(`you chose ${userVariant} and computer chose ${computerVariant}. Win!`);
  }
  else return console.log(`you chose ${userVariant} and computer chose ${computerVariant}. Lose!`);
};

console.log(rpsGame('scissors'));
console.log(rpsGame('rock'));
console.log(rpsGame('paper'));
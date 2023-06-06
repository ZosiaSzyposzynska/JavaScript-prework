function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    return 'Błąd! Wybierz liczbę od 1-3';
  }
}

function playGame(playerInput) {
  let computerMove;
  let playerMove;

  clearMessages();

  computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
  printMessage('Mój ruch to: ' + computerMove);

  playerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + playerMove);

  displayResult(computerMove, playerMove);
}

function displayResult(argComputerMove, argPlayerMove) {
  if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Ja wygrywam!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Ja wygrywam!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Ja wygrywam!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
    printMessage('Remis!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
    printMessage('Remis!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
    printMessage('Remis!');
  }
}

document.getElementById('rock-button').addEventListener('click', function () {
  playGame(1);
});

document.getElementById('paper-button').addEventListener('click', function () {
  playGame(2);
});

document.getElementById('scissors-button').addEventListener('click', function () {
  playGame(3);
});

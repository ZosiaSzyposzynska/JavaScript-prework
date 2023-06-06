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
    printMessage('TY WYGRYWASZ!');
    printResult('0-1');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('JA WYGRYWAM!');
    printResult('1-0')
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('TY WYGRYWASZ!');
    printResult('0-1');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('JA WYGRYWAM!');
    printResult('1-0');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('JA WYGRYWAM!');
    printResult('1-0');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('TY WYGRYWASZ!');
    printResult('0-1')
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
    printMessage('Remis!');
    printResult('1-1')
  } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
    printMessage('REMIS!');
    printResult('1-1')
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
    printMessage('REMIS!');
    printResult('1-1')
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


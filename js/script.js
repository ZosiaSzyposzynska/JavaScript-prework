{
const getMoveName = function (argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  }
}

const playGame = function(playerInput) {

  clearMessages();

  let computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
  printMessage('Mój ruch to: ' + computerMove);

  let playerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + playerMove);

  displayResult(computerMove, playerMove);
}



const displayResult = function(argComputerMove, argPlayerMove) {
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

const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

rockButton.addEventListener('click', function() {
  playGame(1);
});

paperButton.addEventListener('click', function() {
  playGame(2);
});

scissorsButton.addEventListener('click', function() {
  playGame(3);
});


}

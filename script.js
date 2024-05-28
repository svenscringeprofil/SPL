let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWin() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      return board[a];
    }
  }
  if (!board.includes('')) {
    gameActive = false;
    return 'draw';
  }
  return null;
}

function makeMove(index) {
  if (gameActive && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementById('status').textContent = '';
    document.getElementById('board').children[index].textContent = currentPlayer;
    const winner = checkWin();
    if (winner) {
      if (winner === 'draw') {
        document.getElementById('status').textContent = "It's a draw!";
      } else {
        document.getElementById('status').textContent = `${winner} wins!`;
      }
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('status').textContent = '';
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.textContent = '');
}

// Test Commit für Dokumentation

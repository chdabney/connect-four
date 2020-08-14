// query selectors
const columnContainer = document.querySelector(".columnContainer");
const columns = document.querySelectorAll(".column");
const currentPlayer = document.querySelector(".playerTurn");

let board = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

let playerTurn = 1;

//I had help from my friend, Benjamin Scott, to update the game board state.
function addToken(columns) {
  let columnClicked = columns.currentTarget;
  let chip = document.createElement("div");

  if (columnClicked.children.length === 6) {
    alert("nope");
  } else if (playerTurn === 1) {
    currentPlayer.textContent = `Current turn: Black`;
    chip.setAttribute("class", "redChip");
    columnClicked.append(chip);
    board[columnClicked.id].splice(
      columnClicked.children.length,
      1,
      playerTurn
    );
    checkForWin();
    playerTurn = 2;
  } else if (playerTurn === 2) {
    currentPlayer.textContent = `Current turn: Red`;
    chip.setAttribute("class", "blackChip");
    columnClicked.append(chip);
    board[columnClicked.id].splice(
      columnClicked.children.length,
      1,
      playerTurn
    );
    checkForWin();
    playerTurn = 1;
  }
}
//add eventlisteners
for (let index = 0; index < columns.length; index++) {
  columns[index].addEventListener("click", addToken);
  columns[index].id = index;
}

function gameOver() {
  if (playerTurn === 1) {
    currentPlayer.textContent = `Red Wins!`;
  } else {
    currentPlayer.textContent = `Black Wins!`;
  }
  // setTimeout(function () {
  //   location.reload();
  // }, 2000);
}

//check for win. taken from nested array lesson
function checkForWin() {
  const edgeX = board[0].length - 2;
  const edgeY = board.length - 2;

  //Horizontal
  for (let y = 0; y < board.length; y++) {
    // iterate each cell in the row
    for (let x = 0; x < edgeX; x++) {
      let cell = board[y][x];

      // Only check if cell is filled
      if (cell !== 0) {
        // Check the next two cells for the same value
        if (cell === board[y][x + 2] && cell === board[y][x + 3]) {
          console.log("4 in a row found at " + (x + 1) + ":" + (y + 1));
          gameOver();
        }
      }
    }
  }
  // VERTICAL
  // iterate each row
  for (let y = 0; y < edgeY; y++) {
    // iterate each cell in the row
    for (let x = 0; x < board[0].length; x++) {
      cell = board[y][x];

      // Only check if cell is filled
      if (cell !== 0) {
        // Check the next two cells for the same value
        if (cell === board[y + 2][x] && cell === board[y + 3][x]) {
          console.log(
            "4 in a row horizontal found at " + (x + 1) + ":" + (y + 1)
          );
          gameOver();
        }
      }
    }
  }

  // DIAGONAL (DOWN RIGHT)
  // iterate each row
  for (let y = 0; y < edgeY; y++) {
    // iterate each cell in the row
    for (let x = 0; x < edgeX; x++) {
      cell = board[y][x];

      // Only check if cell is filled
      if (cell !== 0) {
        // Check the next two cells for the same value
        if (cell === board[y + 2][x + 2] && cell === board[y + 3][x + 3]) {
          console.log(
            "4 in a row down-right found at " + (x + 1) + ":" + (y + 1)
          );
          gameOver();
        }
      }
    }
  }

  // DIAGONAL (DOWN LEFT)
  // iterate each row
  for (let y = 3; y < board.length; y++) {
    // iterate each cell in the row
    for (let x = 0; x < edgeX; x++) {
      cell = board[y][x];

      // Only check if cell is filled
      if (cell !== 0) {
        // Check the next two cells for the same value
        if (cell === board[y - 2][x + 2] && cell === board[y - 3][x - 3]) {
          console.log(
            "4 in a row down-left found at " + (x + 1) + ":" + (y + 1)
          );
          gameOver();
        }
      }
    }
  }
}

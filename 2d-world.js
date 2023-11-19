//========================================================================//    ---------*Build the 2d world- cell structure and placement*--------------- 
//========================================================================//
const numRows = 20;
const numCols = 40;
const gameWorld = document.getElementById("2d-world");

function createWorld() {
    for (let i = 0; i < numRows; i++) {
      const row = addRow();
      gameWorld.append(row);
  
      for (let j = 0; j < numCols; j++) {
        const cell = addCell();
  
        // Change logic for bottom rows
        if (i === numRows - 1) { // Last row (bottom)
          cell.classList.add("diamond");
        } else if (i === numRows - 2) { // Second to last row
          cell.classList.add("gold");
        } else if (i >= numRows - 8) { // Next 6 rows from the bottom
          let rndNum = Math.random();
          if (rndNum < 0.2) {
            cell.classList.add("gold");
          } else if (rndNum < 0.3) {
            cell.classList.add("diamond");
          } else if (rndNum < 0.6) {
            cell.classList.add("dirt");
          } else {
            cell.classList.add("dirt");
          }
        } else if (i === 11) { //always row 11 for grass
          cell.classList.add("grass");
        } else {
          if (i > 2 && j >= 12 && j < 14) {
            cell.classList.add("leaves");
          } else if (i >= 6 && i <= 7 && j == 12) {
            cell.classList.add("wood");
          } else {
            cell.classList.add("sky");
          }
        }
  
        row.append(cell);
      }
    }
  }
  

const addRow = () => {
  const row = document.createElement("div");
  row.className = "row";
  return row;
};

const addCell = () => {
  const cell = document.createElement("div");
  cell.className = "cell";
  return cell;
};

createWorld();

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
  
        // Bottom rows for diamonds and gold
        if (i === numRows - 1) {
          cell.classList.add("diamond");
        } else if (i === numRows - 2) {
          cell.classList.add("gold");
        } else if (i >= numRows - 8) {
          let rndNum = Math.random();
          if (rndNum < 0.2) {
            cell.classList.add("gold");
          } else if (rndNum < 0.3) {
            cell.classList.add("diamond");
          } else {
            cell.classList.add("dirt");
          }
        } else if (i === 11) {
          cell.classList.add("grass");
        } else {
          // First tree with wood and leaves
          if (j === 12 && i >= 8 && i <= 10) {
            cell.classList.add("wood");
          } else if ((i >= 5 && i <= 7) && (j >= 11 && j <= 13)) {
            cell.classList.add("leaves");
          } 
          // Second tree with wood and flower-leaves
          else if (j === numCols - 3 && i >= 8 && i <= 10) {
            cell.classList.add("wood");
          } else if ((i >= 6 && i <= 7) && (j >= numCols - 4 && j <= numCols - 2)) {
            cell.classList.add("flower-leaves");
          } 
          if ((i >= 9 && i <= 10) && j < 3) {
            cell.classList.add("stone");
        }
        // Small stone pile between trees
        else if ((i >= 10 && i <= 10) && (j >= 15 && j <= 17)) {
            cell.classList.add("stone");}
          
            
          else {
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

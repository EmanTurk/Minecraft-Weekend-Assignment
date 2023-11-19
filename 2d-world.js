
const numRows = 20;
const numCols = 40;
const gameWorld = document.getElementById("2d-world");

function createWorld() {
  for (let i = 0; i < numRows; i++) {
    const row = addRow();
    gameWorld.append(row);
    for (let j = 0; j < numCols; j++) {
      const cell = addCell();

      if (i < 8) {
        if (i > 2 && j >= 10 && j < 15) {
          cell.classList.add("leaves");
        } else if (i >= 6 && i <= 7 && j == 12) {
          cell.classList.add("wood");
        } else {
          cell.classList.add("sky");
        }
      } else if (i == 8) {
        cell.classList.add("grass");
      } else {

        let rndNum = Math.random();
        if (rndNum < 0.05) {
          cell.classList.add("gold");
        } else if (rndNum < 0.01) {
          cell.classList.add("diamond");
        } else if (rndNum < 0.6) {
          cell.classList.add("stone");
        } else {
          cell.classList.add("dirt");
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

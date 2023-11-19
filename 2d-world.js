//========================================================================//   
// ---------*Build the 2d world- cell structure and placement*------------//
//========================================================================//
const numRows = 20;
const numCols = 40;
const gameWorld = document.getElementById("2d-world");

function createWorld() {
    for (let i = 0; i < numRows; i++) { //i loops from 0 to -1.
      const row = addRow();
      gameWorld.append(row);
  
      for (let j = 0; j < numCols; j++) {//inner loop for the columns
        const cell = addCell();

        // Bottom rows for diamonds and gold
        if (i === numRows - 1) {
          cell.classList.add("diamond");
        } else if (i === numRows - 2) {
          cell.classList.add("gold");
        } else if (i >= numRows - 8) {//-8: the limit it of the soil/dirt
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
            //cloud
          if (i===4  && (j===7 || j===6 || j===5)){
            cell.classList.add("cloud");
          }
          if (i===3  && (j===5 || j===3 || j===4)){
            cell.classList.add("cloud");
          }
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
//========================================================================//
//Assigning the tools events

const axe = document.querySelector(".axe");
const pickaxe = document.querySelector(".pickaxe");
const shovel = document.querySelector(".shovel");

let inUseTool;

// Function to change the cursor
function changeCursor(cursorImagePath) {
    document.body.style.cursor = ` url(${cursorImagePath}), auto `;
}

axe.addEventListener("click", () => {
    if (inUseTool) {
        inUseTool.classList.remove("inUse-Tool");
    }
    inUseTool = axe;
    inUseTool.classList.add("inUse-Tool");
    changeCursor('./Assets/axe.png'); 
});

pickaxe.addEventListener("click", () => {
    if (inUseTool) {
        inUseTool.classList.remove("inUse-Tool");
    }
    inUseTool = pickaxe;
    inUseTool.classList.add("inUse-Tool");
    changeCursor('./Assets/Untitled design (25).png'); 
});

shovel.addEventListener("click", () => {
    if (inUseTool) {
        inUseTool.classList.remove("inUse-Tool");
    }
    inUseTool = shovel;
    inUseTool.classList.add("inUse-Tool");
    changeCursor('./Assets/shovel.png'); 
});

//  axe - default tool
axe.click();
//========================================================================//
//tile window- the count of the tiles in the box//

const tileCounts = {
    grass: 0,
    dirt: 0,
    stones:0,
    diamond: 0,
    gold:0,
    leaves: 0,
    flowerLeaves: 0,
    wood: 0
};

//Function: update the tile display

function updateCountDisplay (tileType){
    const countElemtn = document.getElementById(`count${tileType.charAt(0).toUpperCase() + tileType.slice(1)}`);
    countElemtn.textContent = tileCounts[tileType];
}
// Function to remove a tile (to be called when a tile is clicked)
function removeTile(tileType) {
    if (tileType in tileCounts) {
        tileCounts[tileType]++;
        updateCountDisplay(tileType);
    }
    // Additional logic to actually remove the tile from the game
}

// Function to toggle the tile window
const box = document.querySelector('.box');
const tileWindow = document.getElementById('tilewindow');

box.addEventListener('click', () => {
    tileWindow.style.display = tileWindow.style.display === 'none' ? 'block' : 'none';
});

///event listner and mapping tools and tiles

const toolTileMappings = {
    shovel: ["dirt", "grass"],
    axe: ["wood", "leaves", "flower-leaves"],
    pickaxe: ["stone", "diamond", "gold"]
};




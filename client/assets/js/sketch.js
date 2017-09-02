let sudoko;
let painter;
let jsonData;
let sudokuSolver;
let sudokuHelper;
let canvas;
let clicked = false;
let cursor = { x : 0, y : 0}
let options = []; //Move to generators please
let sudokuGenerator;

$(function(){
    $("#solution").click(function () { //Jquery
        solve()
    });
});

$(function(){
    $("#generate").click(function () { //Jquery
  generate();  
    });
});

function generate(){
  sudoku.clean();
  return sudokuGenerator.generate(sudoku);
}

function preload(){
  jsonData = loadJSON('../javascripts/sudokuCases.json');
}

function setup() {
  let screen = createCanvas(700,545);
  screen.parent('screen');
  background(255);
  let easySudoku = jsonData.cases[0];
  sudoku = new Sudoku(9, 9);
  sudoku.load(easySudoku.hard); //Loads the sudoku from JSON
  sudokuHelper = new SudokuHelper();
  sudokuHelper.generateNeighbors(sudoku);
  sudokuGenerator = new SudokuGenerator();
  sudokuSolver = new SudokuSolver();
  painter = new Painter(60); //Each square is 60 pixels
  painter.paintSudoku(sudoku);
  for(let i = 1; i <= sudoku.rows; i++) //Pasar a generadores
    options.push(new Option(width - 80, i * 60 - 30, i));
}

function draw() {
  background(255);
  painter.paintSudoku(sudoku);
  drawOptions();
  /*if(clicked){
    rect(cursor.x, cursor.y - 10, 2, 30)
  }*/

}

function solve(){
  return sudokuSolver.solve(sudoku);
}

function drawOptions(){
  options.forEach( (x) => x.show());
}

function mouseDragged(){
  for(let i = 0; i < options.length; i++)
    if(options[i].collides(mouseX, mouseY)){
      options[i].x = mouseX;
      options[i].y = mouseY;
    }
}

function mouseReleased(){
  for(let i = 0; i < options.length; i++)
    if(options[i].collides(mouseX, mouseY)){
      let mapX = Math.floor(map(mouseX, 0, 545, 0, 9));
      let mapY = Math.floor(map(mouseY, 0, height, 0, 9));  
      sudoku.setValue(mapY, mapX, options[i].value)
      options[i].restart();
    }
}
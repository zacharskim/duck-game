const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
var dPress = false;



function gameLoop() {
    update(); // Update game objects
    render(); // Render the game to the canvas
    requestAnimationFrame(gameLoop); // Call gameLoop again
  }

  
function update() {
    // Update game state
  }


  
spriteSheet = new Image();
spriteSheet.src = 'greenDuck.png'
drawing = new Image();
drawing.onload = function() {
  console.log('hey');
  gameLoop();
};
drawing.src = 'background.png'; // Start loading the image

function render() {
ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
// Uncomment the following line to draw the image
ctx.drawImage(drawing, 0, 0, canvas.width * 0.95, canvas.height * 0.75);
if(dPress){
  spawnDuck()
  ctx.font = "16px serif";
  ctx.fillText("Hello world what", 50, 90);
}
}

  function spawnDuck() {
    console.log('drawing duck i guess', canvas.width, canvas.height);
    ctx.drawImage(spriteSheet, 368, 0, 200, 225, 200, 100, canvas.width * .35, canvas.height * .35)
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  // ctx.drawImage(spriteSheet, , 0, 100, 100, 50, 50, 100, 100);
}
// gameLoop();

// drawing = new Image();
// // spriteSheet = new Image();
// drawing.onload = function() {
//     gameLoop();
// };
// drawing.src = 'background.png';
// spriteSheet.src = 'greenDuck.png';

// function render() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
//   // Draw your game here
//   console.log('drawing', drawing);
//   // ctx.drawImage(drawing, 0, 0, canvas.width*.95, canvas.height*.75);
//   if(dPress){
//     // spawnDuck()
//     ctx.font = "16px serif";
//     ctx.fillText("Hello world", 50, 90);
//   }

// }

document.addEventListener('keydown', function(event) {
    if (event.key === 'd') { // This checks for both lowercase and uppercase 'D'
      // spawnDuck()
      console.log('Hello World?');
      dPress = true
      console.log(dPress, 'huh')
    }
  });

  document.addEventListener('mousemove', function(event){
    console.log(event.clientX, event.clientY)
  })


























  // webgazer.setGazeListener(function(data, elapsedTime) {
  //   if (data == null) {
  //     return;
  //   }
  //   var xprediction = data.x; //these x coordinates are relative to the viewport
  //   var yprediction = data.y; //these y coordinates are relative to the viewport
  //   console.log(elapsedTime); //elapsed time is based on time since begin was called
  // }).begin();
    

//goal for this iteration,,, user presses a key and a duck or two flies up from the grass and just flies around indefintley...

//hit d to produce a random duck somewhere...
///currently working on the above...



//will need a sprite sheet.... finally made the sprite sheet










//then add in the eye tracking


//then add in the eye tracking and duck shooting...




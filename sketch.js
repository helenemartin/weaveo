let x = 0;
let y = 0;
let spacing = 10;
var height;
var width;
var lines = [];
var backgroundY = 0;
var layer;
var frame;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  // layer = createVideo(['assets/5.mp4']);
  // layer.hide(); // by default video shows up in separate dom
  //                 // element. hide it and draw it to the canvas
  //                 // instead
  // layer.loop();
  graphic = createGraphics(1500, 1200);
  height = displayHeight;
  width = displayWidth;
  graphic.stroke('rgba(255,255,255, 0.8)');


}
function drawLine(lineData) {
  graphic.line(lineData.x,lineData.y,lineData.width,lineData.height);


}
// create new graphic instance, draw a video to graphic, call image on that graphic,

function draw() {
  clear();
  fill('#000');
  noStroke();
  rect(0,backgroundY, width, height);
  
  

  var lineData;
  if (random(1) < 0.3) {
    // line(x, y, x + spacing, y + spacing);
      lineData = {
        x: x,
        y: y,
        width: x + spacing,
        height:  y + spacing
    }
  } else {
    // line(x, y + spacing, x + spacing, y);
      lineData = {
        x: x,
        y: y + spacing,
        width: x + spacing,
        height:  y 
    }
  }

  lines.push(lineData);
  for  (var i = 0; i < lines.length; i++){
    drawLine(lines[i]);
    // var currentLine = lines[i];
    // line(currentLine.x,currentLine.y,currentLine.width,currentLine.height);

  }
  
  // layer.blend(graphic, 0, 0, width, height, 0, 0, width, height, NORMAL);
  // image(layer, 0, 0);
  image(graphic, 0, 0);

  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
    height = height - spacing;
    backgroundY = y;
  }

}
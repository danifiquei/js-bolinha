let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  
  createCanvas(400, 400);
  background(color(179, 70, 60));
  cor = color(random(0, 350), random(0, 350), random(0, 350));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);

  if(mouseX < posicaoHorizontal) 
    posicaoHorizontal = posicaoHorizontal - 1;
  
  
  if(mouseX > posicaoHorizontal) 
    posicaoHorizontal = posicaoHorizontal + 1;
  
  
  if(mouseY < posicaoVertical) 
    posicaoVertical --;
  
  if(mouseY > posicaoVertical) 
    posicaoVertical ++;
  
  if(mouseIsPressed)
      cor = color(random(0, 350), random(0, 350), random(0, 350)),
  random(0, 100);
}
//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//variáveis da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raquetecomprimento = 10;
let raqueteAltura = 90;

function setup() {
    createCanvas(600, 400);
}

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;

function draw() {
  background(0); //1 - Desenha o background 
  mostraBolinha(); // 2 - Desenha a bolinha
  movimentaBolinha(); // 3 - Movimenta a Bolinha
  verificaColisaoBorda(); // 4 - Verifica Colisão da bolinha
  mostraraquete();
 // 5- Volta para o início da função draw()
}



function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro)
  
}
function mostraraquete(){
  rect(xRaquete, yRaquete, raquetecomprimento, raqueteAltura);
}


function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}








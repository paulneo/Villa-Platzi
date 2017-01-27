var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", mover);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
}


var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var dibujadovaca= true;
var vacax =[];
var vacay =[];
var contadorVaca;

var pollo = {
  url: "pollo.png",
  cargaOK: false
}
var pollonx =[];
var pollony =[];
var dibujadoPollo = true;
var contadorPollo;


var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
  xPosition: 0,
  yPosition: 0,
  movimiento: 10
}
var dibujadocerdo= true;
var cantidad = aleatorio(1, 10);
var puerta = false;

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarpollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarcerdos);

function cargarFondo()
{
  fondo.cargaOK= true
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarpollos()
{

  pollo.cargaOK = true;
  dibujar();
}
function cargarcerdos(){
  cerdo.cargaOK=true;
  dibujar();
}

function dibujar()
{
  if (fondo.cargaOK) {

      papel.drawImage(fondo.imagen, 0, 0);
      dibujadofondo= false;

  }

  if(vaca.cargaOK)
  {
    if (dibujadovaca) {
      for(var v=0; v < cantidad; v++)
      {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 10);
        var x = x * 60;
        var y = y * 40;
        papel.drawImage(vaca.imagen, x, y);
        vacax[v] = x;
        vacay[v] = y;
        dibujadovaca =false;
        contadorVaca = cantidad;
      }

    }
  }

  if(pollo.cargaOK)
  {
    if (dibujadoPollo) {
      for(var v=0; v < cantidad; v++)
      {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 10);
        var x = x * 60;
        var y = y * 40;
        papel.drawImage(pollo.imagen, x, y);
        pollonx[v]=x;
        pollony[v]= y;
        dibujadoPollo=false;
        contadorPollo = cantidad;

      }
    }

  }

  if(cerdo.cargaOK)
  {
    if (!puerta)
    {
      for(var v=0; v < 1; v++)
        {
          var xcerdo = aleatorio(0, 7);
          var ycerdo = aleatorio(0, 10);
          cerdo.xPosition = xcerdo * 60;
          cerdo.yPosition = ycerdo * 40;
          papel.drawImage(cerdo.imagen, cerdo.xPosition, cerdo.yPosition);
          mover(cerdo.xPosition,cerdo.yPosition);

        }
    }

    if(puerta){
      if (cerdo.xPosition <=430 && cerdo.yPosition<= 430){
        papel.drawImage(cerdo.imagen, cerdo.xPosition, cerdo.yPosition);
      }
      else if(cerdo.xPosition <=430){
        papel.drawImage(cerdo.imagen, 430, cerdo.yPosition);
      }
      else if(cerdo.yPosition <=430){
        papel.drawImage(cerdo.imagen, cerdo.xPosition,430);
      }
    }
  }
  if (!dibujadoPollo && !dibujadovaca) {
    dibujadovaca=false;
    if (!dibujadovaca) {
      for (var i = 0; i < contadorVaca ; i++) {
        papel.drawImage(vaca.imagen, vacax[i], vacay[i]);
      }
    }
    dibujadoPollo=false;
    if (!dibujadoPollo) {
      for (var i = 0; i < contadorPollo; i++) {
        papel.drawImage(pollo.imagen,pollonx[i], pollony[i] );
      }
    }
  }
}


function mover(evento) {
    switch(evento.keyCode)
    {
      case teclas.UP:
        cerdo.yPosition = cerdo.yPosition  - cerdo.movimiento;
        puerta = true;
        dibujar();
        break;
      case teclas.DOWN:
          if (cerdo.yPosition<= 420){
            cerdo.yPosition  = cerdo.yPosition  + cerdo.movimiento;
          }
        puerta = true;
        dibujar();
        break;
      case teclas.LEFT:
        cerdo.xPosition = cerdo.xPosition - cerdo.movimiento;
        puerta = true;
        dibujar();
        break;
      case teclas.RIGHT:
        if (cerdo.xPosition <=420){
          cerdo.xPosition = cerdo.xPosition + cerdo.movimiento;
        }
        puerta = true;
        dibujar();
        break;
    }
}

function aleatorio(min, maxi)
{
  return Math.floor(Math.random() * (maxi - min + 1)) + min;
}

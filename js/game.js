let intento = 0;
let puntaje = 0;
let intentosRestantes = 3;
const game = (id) => {
  if (intento < 3) {
    intento++;

    document.getElementById("intentos").innerText = intento;

    if (id == "4") {
      document.getElementById("result").innerText =
        "¡Felicitaciones, has seleccionado la opción correcta!";
      document.getElementById("result").style.background = "blue";
      document.getElementById("imgPokemon").src = "../img/pcolor.jpg";
      if (intento == 1) {
        puntaje = 5;
        document.getElementById("puntaje").innerText = puntaje;
      } else if (intento == 2) {
        puntaje = 3;
        document.getElementById("puntaje").innerText = +puntaje;
      } else if (intento == 3) {
        puntaje = 1;
        document.getElementById("puntaje").innerText = +puntaje;
      }
    } else {
      document.getElementById("result").innerText =
        "¡Pokémon incorrecto, inténtalo nuevamente!";
      document.getElementById("result").style.background = "red";
    }
  } else {
    reset();
  }
};

const reset = () => {
  document.getElementById("result").innerText = "";
  document.getElementById("imgPokemon").src = "../img/pnegro.jpg";
  intento = 0;
  puntaje = 0;
  document.getElementById("puntaje").innerText = +puntaje;
  document.getElementById("intentos").innerText = +intento;
};

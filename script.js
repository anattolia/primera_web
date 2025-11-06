const titulo = document.getElementById("titulo");
const textoInicial = document.getElementById("textoInicial");
let estadoInicial = true;
let posicionTexto = 0;
const textos = ["Hola", "Bienvenidx", "a", "esta", "página", "web"];

textoInicial.innerText = textos[posicionTexto];

textoInicial.addEventListener("click", () => {
  if (posicionTexto < textos.length - 1) {
  posicionTexto = posicionTexto + 1;
  textoInicial.innerText = textos[posicionTexto];
  } else {
    posicionTexto = 0;
    textoInicial.innerText = textos[posicionTexto];
  }
})

titulo.addEventListener("click", () => {
  if (estadoInicial === true) {
    titulo.innerText = "Bienvenidxs";
  } else {
    titulo.innerText = "Hola, soy Don Pepe Adivinador";
  }
  estadoInicial = !estadoInicial;
})

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let simbolos = ["♦", "♥", "♠", "♣"];
  let numeros = [];
  let s = Math.floor(Math.random() * 4);
  let color = ["red", "black"];
  //let letras = "J", "Q", "K";
  for (let i = 1; i <= 10; i++) {
    // console.log(i);
    numeros.push(i);
  }
  let n = Math.floor(Math.random() * 13);
  let c = Math.floor(Math.random() * 2);
  //numeros.push(n);
  console.log(color[c]);
  numeros.push("J", "Q", "K");
  console.log(numeros);
  console.log(numeros[n]);
  console.log(simbolos[s]);
  //console.log(s);
  let colorFinal = color[c];
  let simboloFinal = simbolos[s];
  let numeroFinal = numeros[n];

  let h1 = document.createElement("h1");
  h1.innerHTML = `${simboloFinal}`;
  let simbolo = document.getElementById("simbolo1");
  document.getElementById("simbolo1").style.color = `${colorFinal}`;
  simbolo.append(h1);

  let sh1 = document.createElement("h1");
  sh1.innerHTML = `${simboloFinal}`;
  let simbolo2 = document.getElementById("simbolo2");
  document.getElementById("simbolo2").style.color = `${colorFinal}`;
  simbolo2.append(sh1);

  if (numeroFinal == 1) {
    let h1 = document.createElement("h1");
    h1.innerHTML = `${simboloFinal}`;
    let simbolo = document.getElementById("numero");
    document.getElementById("numero").style.color = `${colorFinal}`;
    simbolo.append(h1);
  } else {
    let nh1 = document.createElement("h1");
    nh1.innerHTML = `${numeroFinal}`;
    let numero = document.getElementById("numero");
    numero.append(nh1);
  }
};

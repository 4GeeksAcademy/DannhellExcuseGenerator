/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let quien = [" Mi Madre ", " Un ladron ", " El paleta ", " Mi gato "];
  let accion = [
    " ha roto ",
    " ha robado ",
    " ha infectado con virus ",
    " se ha llevado "
  ];
  let cosa = [
    " mi ordenador ",
    " nuestra  app ",
    " mi movil ",
    " vuestro servidor "
  ];
  let cuando = [
    " en la noche ",
    " cuando estabamos de  vacaciones ",
    " en el horario laboral ",
    " a la  hora de la  siesta"
  ];

  let QuienRandom = Math.floor(Math.random() * quien.length);
  let AccionRandom = Math.floor(Math.random() * accion.length);
  let CosaRandom = Math.floor(Math.random() * cosa.length);
  let CuandoRandom = Math.floor(Math.random() * cuando.length);
  let a =
    quien[QuienRandom] +
    accion[AccionRandom] +
    cosa[CosaRandom] +
    cuando[CuandoRandom];
  console.log(a);
  console.log("Hello Rigo from the console!");
  document.getElementById("excusa").innerHTML = a;
};


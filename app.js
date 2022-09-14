"use strict";
//Cadena de valores que puede tomar un codigo de color
const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
//constante btn que cogemos del id btn del html
const btn = document.getElementById("btn");
//lo mismo con el color. ¿?QuerySelector?¿?
const color = document.querySelector(".color");
//Above hace que cuando cliquemos se imprima en consola el body del documento html.
btn.addEventListener("click", function () {
    //Estamos realizando una cadena que recorre 6 veces el valor que es la cadena #000000   
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        console.log(getRandomNumber());
        hexColor += hexValues[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
function getRandomNumber() {
    return Math.floor(Math.random() * hexValues.length);
}

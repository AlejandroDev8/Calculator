//Declarando constantes

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

//Arreglo de butones

buttons.forEach((item) => {
  item.onclick = () => {
    //Validación para borrar todo lo que esté en el display
    if (item.id == "clear") {
      display.innerText = "";
      //Validación de "<"
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1); //Borra en longuitud "-1"
      //Validación del "="
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "SYNTAX ERROR";
      setTimeout(() => (display.innerText = ""), 2000); //Para que se limpie el texto "NULL" del display en 2 segundos (2000 está en milisegundos)
    } else {
      display.innerText += item.id;
    }
  };
});

//Switch para el cambio de tema

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDak = true;

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark-mode");
  themeToggleBtn.classList.toggle("active");
  isDak = !isDak;
};

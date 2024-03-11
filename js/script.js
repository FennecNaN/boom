document.addEventListener("DOMContentLoaded", function () {
  // obtener elementos del DOM
  const userInputDOM = document.getElementById("userInput");
  const countdownDOM = document.getElementById("countdown");
  const resultDOM = document.getElementById("result");
  const restartButton = document.getElementById("restart");

  let randomNumber;
  let countdown;

  // funcion para iniciar el juego
  function startGame() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    countdown = 5;

    // setinterval con funcion de cuenta atras

    const countdownInterval = setInterval(function () {
      if (countdown >= 0) {
        countdownDOM.textContent = countdown;
        countdown--;
      } else {
        clearInterval(countdownInterval);
        userInput();
      }
    }, 1000);
  }

  //  Eleccion de ganador 
  function userInput() {
    const userNumber = parseFloat(userInputDOM.value);

    if (userNumber >= 1 && userNumber <= 3) {
      if (userNumber === randomNumber) {
        resultDOM.textContent = `¡Has salvado el mundo! Número elegido: ${userNumber}, Número de la bomba: ${randomNumber}`;
      } else {
        resultDOM.textContent = `La bomba ha estallado. Número elegido: ${userNumber}, Número de la bomba: ${randomNumber}`;
      }
    }
  }

  // funcion para el boton de reseteo
  function restartGame() {
    userInputDOM.value = "";
    resultDOM.textContent = "";
    startGame();
  }

  userInputDOM.addEventListener("blur", startGame);
  restartButton.addEventListener("click", restartGame);
});


const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");

const resultOutput = document.getElementById("result");
const operationText = document.getElementById("operation");
const message = document.getElementById("message");

const operationButtons = document.querySelectorAll("[data-operation]");
const clearButton = document.getElementById("clear");

// Función para realizar las operaciones matemáticas
function calculate(operation) {

    const firstValue = number1Input.value.trim();
    const secondValue = number2Input.value.trim();

    if (firstValue === "" || secondValue === "") {
        showError("Escribe los dos números para continuar.");
        return;
    }

    const number1 = Number(firstValue);
    const number2 = Number(secondValue);

    let result;
    let symbol;

    if (!Number.isFinite(number1) || !Number.isFinite(number2)) {
        showError("Ingresa números válidos.");
        return;
    }

    switch (operation) {

        case "sum":
            result = number1 + number2;
            symbol = "+";
            break;

        case "subtract":
            result = number1 - number2;
            symbol = "−";
            break;

        case "multiply":
            result = number1 * number2;
            symbol = "×";
            break;

        case "divide":

            if (number2 === 0) {
                showError("No es posible dividir entre cero.");
                return;
            }

            result = number1 / number2;
            symbol = "÷";
            break;

        default:
            showError("Selecciona una operación válida.");
            return;
    }

    resultOutput.textContent = Number(result.toFixed(8)).toString();

    operationText.textContent =
        `${number1} ${symbol} ${number2} =`;

    message.textContent = "";
}

// Función para mostrar errores
function showError(text) {

    resultOutput.textContent = "—";
    operationText.textContent = "No se pudo calcular";
    message.textContent = text;

}

// Eventos de los botones
operationButtons.forEach((button) => {

    button.addEventListener("click", () => {

        calculate(button.dataset.operation);

    });

});

// Botón para limpiar
clearButton.addEventListener("click", () => {

    number1Input.value = "";
    number2Input.value = "";

    resultOutput.textContent = "0";
    operationText.textContent = "Listo para calcular";

    message.textContent = "";

    number1Input.focus();

});

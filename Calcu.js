let display = document.getElementById('display');
//Obtiene el documento en HTML con el id display y a su vez lo asignamos a la variable display.
let currentOperand = '';
//Declaramos una variable y la inicia como una cadena vacia. Esta variable almacenará el número actual que se está ingresando.
let previousOperand = '';
//Declaramos una variable y la inicia como una cadesa vacia. Esta variable almacenará el número anterior antes de la operación.
let operation = null;
//Está variable almacenará la operación matemática.

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
       //si el valor ingresado es un punto y la variable ya lo contiene, la función no hace nada.
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
    //Actualiza lo anteriormente realizado en la variable.
}
//Define la función que almacenará el número y lo agregara a nuestra variable (currentOperation)

function chooseOperation(op) {
    if (currentOperand === '') return;
    //Si la variable currentOperation está vacio, la función no realiza ninguna acción.
    if (previousOperand !== '') {
        calculate();
    }
    //si la variable currentOperation no está vacia, llama la función calculate.
    operation = op;
    //calculate asigna la operación a está variable (operation)
    previousOperand = currentOperand;
    //Mueve el valor que se encuentra en currentOperation a previousOperation vaciando currentOperation.
    currentOperand = '';
}
//Define la función que almacena una operación como argumento.

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    //Combierte preciousoperation en un punto flotante.
    const current = parseFloat(currentOperand);
    //Convierte currentOperation en un punto Flotante.
    if (isNaN(prev) || isNaN(current)) return;
    //Evalua que el valor asignado sean números, si alguno de ellos no lo es, la función no hace nada.
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    //Evalua el signo que se a ingresado para poder ejecutarlo.
    currentOperand = result;
    operation = null;
    //Establece operation en null.
    previousOperand = '';
    //Establece previousOperation en una cadena vacia.
    updateDisplay();
    //Actualiza lo anteriormente realizado en la variable.
}
//Define la función que realizara la operación matemática basada en operation.

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
    //Actualiza lo anteriormente realizado en la variable.
}
//Define la función que reestrablece cada una de las variables.

function updateDisplay() {
    display.innerText = currentOperand;
}
//Define una función que actualiza el contenido de la variable display con el valor de currentOperation.

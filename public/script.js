let currentInput = '';
let currentOperation = null;
let prevInput = null;

function appendToDisplay(value) {
  currentInput += value;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function setOperation(operation) {
  if (currentOperation !== null) {
    calculate();
  }
  currentOperation = operation;
  prevInput = currentInput;
  currentInput = '';
}

function calculate() {
  if (currentOperation !== null && prevInput !== null && currentInput !== '') {
    switch (currentOperation) {
      case '+':
        currentInput = String(parseFloat(prevInput) + parseFloat(currentInput));
        break;
      case '-':
        currentInput = String(parseFloat(prevInput) - parseFloat(currentInput));
        break;
      case '*':
        currentInput = String(parseFloat(prevInput) * parseFloat(currentInput));
        break;
      case '/':
        currentInput = String(parseFloat(prevInput) / parseFloat(currentInput));
        break;
      default:
        break;
    }
    currentOperation = null;
    prevInput = null;
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  currentOperation = null;
  prevInput = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

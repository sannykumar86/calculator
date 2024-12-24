export function setupEventListeners(calculator) {
  const previousOperandElement = document.querySelector('.previous-operand');
  const currentOperandElement = document.querySelector('.current-operand');
  
  // Number buttons
  document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.textContent);
      calculator.updateDisplay(previousOperandElement, currentOperandElement);
    });
  });

  // Operator buttons
  document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.textContent);
      calculator.updateDisplay(previousOperandElement, currentOperandElement);
    });
  });

  // Equals button
  document.querySelector('.equals').addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay(previousOperandElement, currentOperandElement);
  });

  // Clear button
  document.querySelector('.clear').addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay(previousOperandElement, currentOperandElement);
  });

  // Delete button
  document.querySelector('.delete').addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay(previousOperandElement, currentOperandElement);
  });

  // Keyboard support
  document.addEventListener('keydown', event => {
    if (event.key >= '0' && event.key <= '9' || event.key === '.') {
      calculator.appendNumber(event.key);
    } else if (event.key === '+' || event.key === '-') {
      calculator.chooseOperation(event.key);
    } else if (event.key === '*') {
      calculator.chooseOperation('×');
    } else if (event.key === '/') {
      event.preventDefault();
      calculator.chooseOperation('÷');
    } else if (event.key === 'Enter' || event.key === '=') {
      event.preventDefault();
      calculator.compute();
    } else if (event.key === 'Backspace') {
      calculator.delete();
    } else if (event.key === 'Escape') {
      calculator.clear();
    }
    calculator.updateDisplay(previousOperandElement, currentOperandElement);
  });
}
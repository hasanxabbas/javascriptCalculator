const display = document.getElementById('display');

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  const lastChar = display.value.slice(-1);
  if ('+-*/%'.includes(lastChar)) {
    display.value = display.value.slice(0, -1);
  }
  display.value += op;
}

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
  } catch {
    display.value = 'Error';
  }
}

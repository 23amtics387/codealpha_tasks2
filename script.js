let screen = document.getElementById('screen');

function appendValue(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = '';
}

function deleteChar() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = screen.value;
    const result = eval(expression);
    screen.value = result;
    addToHistory(expression + ' = ' + result);
  } catch (error) {
    screen.value = 'Error';
  }
}

function addToHistory(entry) {
  const historyList = document.getElementById('historyList');
  const li = document.createElement('li');
  li.textContent = entry;
  historyList.prepend(li);
}

document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('light');
});

document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    deleteChar();
  } else if (key === 'Escape') {
    clearScreen();
  }
});

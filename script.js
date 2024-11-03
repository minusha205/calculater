// script.js

let currentNumber = ''; // now
let previousNumber = ''; // past
let operator = ''; // operator

function appendNumber(number) {
  currentNumber += number; //add
  updateDisplay();
}
function appendNumber(number) {
  if (number === '.' && currentNumber.includes('.')) return; // (.) add only one time
  currentNumber += number;
  updateDisplay();
}


function setOperator(op) {
  if (currentNumber === '') return; // sankayawak naththan iwath wenna 

  // past agayak athnam karagena yanna 
  if (previousNumber !== '') calculate();

  operator = op; // add operator
  previousNumber = currentNumber; // past = now
  currentNumber = ''; // now = "  "

  updateDisplay(); // display update
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  updateDisplay();
}

function calculate() {
  let result;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);

  if (isNaN(prev) || isNaN(current)) return; // no number. no calculation

  switch (operator) {
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
      result = current !== 0 ? prev / current : 'Error'; // divaide= not a 0
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  operator = '';
  previousNumber = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = currentNumber || '0'; //update display
}

// const button = document.getElementsByClassName('hoverButton');

// // Mouse over event to change button color and simulate press effect
// button.addEventListener('mouseover', () => {
//     button.style.backgroundColor = 'rgb(107, 107, 210)'; // Change color on hover
//    // Scale button for pressed effect
// });

// button.addEventListener('mouseout', () => {
//   button.style.backgroundColor = 'aliceblue'; // Revert to original color
 
// });kk  
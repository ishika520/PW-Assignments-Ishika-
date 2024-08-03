const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];

const positiveNumbers = numbers.filter(number => number > 0);

const positiveNumbersDiv = document.getElementById('positive-numbers');
positiveNumbersDiv.innerHTML = `Positive numbers: ${positiveNumbers.join(', ')}`;

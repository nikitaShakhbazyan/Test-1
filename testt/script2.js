const numbersDiv = document.getElementById('numbers');

for (let i = 1; i <= 100; i++) {
  const numberElement = document.createElement('span');
  numberElement.textContent = i + ' ';

  if (i % 3 === 0 && i % 5 === 0) {
    numberElement.textContent = `${i} A/B Testing `;
  } else if (i % 5 === 0) {
    numberElement.textContent = `${i} Testing `;
  } else if (i % 3 === 0) {
    numberElement.textContent = `${i} A/B `;
  } else {
    numberElement.textContent = `${i} `;
  }

  numbersDiv.appendChild(numberElement); }
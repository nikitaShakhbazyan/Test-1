function BtnFunc() {
    var header = document.getElementById("header");
    if (header.style.display === "block") {
      header.style.display = "none";
    } else {
      header.style.display = "block";
    }
  }



  function extractNumberFromString(str) {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0]) : null;
  }

  function calculatePricePerUnit(productElement, priceElement) {
    const productName = productElement.textContent.trim().toLowerCase();
    const priceText = priceElement.textContent.trim();

    let unit = '';
    let pricePerUnit = null;

    if (productName.includes('яйца') && priceText.includes('шт')) {
      unit = 'шт';
      const quantity = extractNumberFromString(productName);
      pricePerUnit = extractNumberFromString(priceText) / quantity;
    } else if (priceText.includes('мл')) {
      unit = 'литр';
      pricePerUnit = extractNumberFromString(priceText) / 1000;
    } else if (priceText.includes('г')) {
      unit = 'кг';
      pricePerUnit = extractNumberFromString(priceText) / 1000;
    }

    return { unit, pricePerUnit };
  }

  function updatePrices() {
    const rightSideBar = document.getElementById('rightSideBar');
    const productElements = rightSideBar ? rightSideBar.querySelectorAll('p') : [];
    productElements.forEach((productElement) => {
      const priceElement = productElement.querySelector('i');
      if (priceElement) {
        const { unit, pricePerUnit } = calculatePricePerUnit(productElement, priceElement);
        if (unit && pricePerUnit !== null) {
          const unitPriceElement = document.createElement('span');
          unitPriceElement.textContent = `Цена за ${unit}: ${pricePerUnit.toFixed(2)}$`;
          priceElement.parentNode.insertBefore(unitPriceElement, priceElement.nextSibling);
        }
      }
    });
  }

  window.onload = function () {
    updatePrices();
  };


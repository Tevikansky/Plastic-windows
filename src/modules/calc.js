const calc = () => {

  const balcony = document.getElementById('calc-type')
  const material = document.getElementById('calc-type-material')
  const square = document.getElementById('calc-input')
  const total = document.getElementById('calc-total')
  const calcBlock = document.getElementById('calc')
if (calcBlock) {
  const countCalc = () => {
    const calcBalcony = +balcony.options[balcony.selectedIndex].value;

    const calcSquare = square.value;
    let totalValue = 0;
    if (!Number(material.value) && Number(calcBalcony)) {
      totalValue = calcBalcony * calcSquare
    } else if (Number(material.value) && Number(calcBalcony)) {
      totalValue = calcBalcony * calcSquare * material.value
    } else {
      totalValue = 0
    }

    total.textContent = Math.round(totalValue);
    total.placeholder = Math.round(totalValue);

  }

  calcBlock.addEventListener('input', (e) => {
    countCalc();

  })
}
}

export default calc
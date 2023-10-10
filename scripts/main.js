function numberClickListener(char) {
  return () => {
    const element = document.querySelector("#number");
    if (element.innerText === '0') {
      element.innerText = char;
    } else {
      element.innerText = element.innerText + char;
    }
  };
}

document.querySelector("#one-button").addEventListener("click", numberClickListener(1));
document.querySelector("#two-button").addEventListener("click", numberClickListener(2));
document.querySelector("#three-button").addEventListener("click", numberClickListener(3));
document.querySelector("#four-button").addEventListener("click", numberClickListener(4));
document.querySelector("#five-button").addEventListener("click", numberClickListener(5));
document.querySelector("#six-button").addEventListener("click", numberClickListener(6));
document.querySelector("#seven-button").addEventListener("click", numberClickListener(7));
document.querySelector("#eight-button").addEventListener("click", numberClickListener(8));
document.querySelector("#nine-button").addEventListener("click", numberClickListener(9));
document.querySelector("#zero-button").addEventListener("click", numberClickListener(0));

document.querySelector("#coma-button").addEventListener("click", () => {
  const element = document.querySelector("#number");
  if (element.innerText.indexOf('.') === -1) {
    element.innerText = element.innerText + '.';
  }
});

document.querySelector("#remove-last-char-button").addEventListener("click", () => {
  const element = document.querySelector("#number");
  element.innerText = element.innerText.substring(0, element.innerText.length - 1);

  if (element.innerText.length === 0) {
    element.innerText = '0';
  }
});

document.querySelector("#remove-all-button").addEventListener("click", () => {
  document.querySelector("#result").innerText = '0';
  document.querySelector("#number").innerText = '0';
});

document.querySelector("#equals-button").addEventListener("click", () => {
  document.querySelector("#result").innerText = document.querySelector("#number").innerText;
  document.querySelector("#number").innerText = '0';
});

function operationClickListener(operation) {
  return () => {
    const resultElement = document.querySelector("#result");
    const numberElement = document.querySelector("#number");

    resultElement.innerText = Math.round(operation(parseFloat(resultElement.innerText), parseFloat(numberElement.innerText)) * 100000) / 100000;
    numberElement.innerText = '0';
  }
}

document.querySelector("#plus-button").addEventListener("click", operationClickListener((a, b) => a + b));
document.querySelector("#minus-button").addEventListener("click", operationClickListener((a, b) => a - b));
document.querySelector("#multiply-button").addEventListener("click", operationClickListener((a, b) => a * b));
document.querySelector("#divide-button").addEventListener("click", operationClickListener((a, b) => a / b));
document.querySelector("#percent-button").addEventListener("click", operationClickListener((a, b) => a * (b / 100)));

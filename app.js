const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");

const swap = document.getElementById("swap");
const rateEl = document.getElementById("rate");

const calculate = () => {
  const valueOne = currencyOne.value;
  const valueTwo = currencyTwo.value;

  const fecthData = async () => {
    const response = await fetch("https://open.exchangerate-api.com/v6/latest");
    const data = await response.json();

    const rate = data.rates[valueTwo] / data.rates[valueOne];
    rateEl.innerText = `1 ${valueOne} = ${rate} ${valueTwo}`;
    amountTwo.value = (amountOne.value * rate).toFixed(2);
  };
  fecthData();
};

swap.addEventListener("click", () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
amountOne.addEventListener("input", calculate);

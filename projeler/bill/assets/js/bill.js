let billInput = document.querySelector('.bill-amount');
let tipSelectButtons = document.querySelectorAll('.tip-percent button');
let tipAmount = document.querySelector('.tip-amount');
let tipInput = document.querySelector('.tip-input');
let totalAmount = document.querySelector('.total-amount');
let numberofInput = document.querySelector('.split-number');
let reset = document.querySelector('.reset')


function handleTipButton() {
  let bill = Number(billInput.value);
  let tip = Number(this.innerText);
  tipAmount.innerText = Math.round(bill / 100 * tip)  
}

for(let i = 0; i < tipSelectButtons.length; i++) {
  let btn =  tipSelectButtons[i]
  btn.addEventListener('click',handleTipButton);
}

function handleTipInput() {
  let bill = Number(billInput.value);
  let tip = Number(this.value);
  tipAmount.innerText = Math.round(bill / 100 * tip)
}

tipInput.addEventListener('keyup',handleTipInput);

function handlePersonNumbers() {
  let bill = Number(billInput.value) + Number(tipAmount.innerText);
  let total = Number(numberofInput.value);
  totalAmount.innerText = Math.round(bill / total) + '$'
}
numberofInput.addEventListener('keyup', handlePersonNumbers);

function handleReset() {
  window.location.reload(true);
}

reset.addEventListener('click', handleReset)

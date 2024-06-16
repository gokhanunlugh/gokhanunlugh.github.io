let incomeForm = document.querySelector('.form-input');
let add = document.querySelector('.add')
let reset = document.querySelector('.reset');
let incTotal = document.querySelector('.income-total');
let expTotal = document.querySelector('.expense-total');
let total = document.querySelector('.total');
let incExpList = [];
let incomeEnrty = document.querySelector('.income-value')
let incomeCalc = 0;
let expenseCalc = 0;
let totalCalc = 0;


if(typeof localStorage.incExpList !== 'undefined') {
  incExpList = JSON.parse(localStorage.incExpList);
  addIncomeExpense();
}


function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(incomeForm);
  let formObj = Object.fromEntries(formData);
  incExpList.push(formObj) 


  save();
  addIncomeExpense();
}

function save() {
  localStorage.incExpList = JSON.stringify(incExpList);
}


function addIncomeExpense() {
  incTotal.innerHTML = '';
  expTotal.innerHTML = '';
  total.innerHTML = '';
  for (let i = 0; i < incExpList.length; i++) {
    incomeCalc += Number(incExpList[i].income);
    expenseCalc += Number(incExpList[i].expense);
    totalCalc = incomeCalc - expenseCalc;
    incTotal.innerHTML = incomeCalc;
    expTotal.innerHTML = expenseCalc;
    if (totalCalc > 0) {
      total.innerHTML = `${totalCalc} TL kardasınız.`
    } else if (totalCalc === 0 ) {
      total.innerHTML = 0;
    }
     else {
      total.innerHTML = `${totalCalc} TL zarardasınız.`
  
    }
  }


  incomeForm.reset();

}

function resetLocal() {
  localStorage.clear();
  incExpList = [];
  addIncomeExpense();1

}

incomeForm.addEventListener('submit', handleFormSubmit)
reset.addEventListener('click', resetLocal)










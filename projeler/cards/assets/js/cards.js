let form = document.querySelector('#form');
let btn = document.querySelector('.submit');
let show = document.querySelector('.sent');
let numberError = document.querySelector('.number-error');
let dateError = document.querySelector('.date-error');
let cvvError = document.querySelector('.cvv-error');
let cardName = document.querySelector('.name');
let cardNumber = document.querySelector('.card-number');
let cardMonth = document.querySelector('.month');
let cardYear = document.querySelector('.year');
let cardCvv = document.querySelector('.cvv');




function handleSumbit(e) {
  e.preventDefault();

  cardName.innerHTML = form['cardHolder'].value;
  cardNumber.innerHTML = form['cardNumber'].value;
  cardMonth.innerHTML = form['month'].value;
  cardYear.innerHTML = form['year'].value;
  cardCvv.innerHTML = form['cvv'].value;

}


function handleClick(e) {


  if (form['cardHolder'].value === '') {
    return
  }else if (form['cardNumber'].value === '') {
    numberError.style.display = 'inline'
    return
  } else  if (form['month'].value === '' || form['year'].value === '') {
    numberError.style.display = 'none'
    dateError.style.display = 'inline'
    return
  } else if (form['cvv'].value === '') {
    dateError.style.display = 'none'
    cvvError.style.display = 'inline'
    return
  }



  form.style.display = 'none'
  show.style.display = 'flex'
  setTimeout(function () {
    show.style.display = "none";
    form.style.display = "block";
  }, 2000);
}




form.addEventListener('keyup', handleSumbit)

btn.addEventListener('click', handleClick)

let general = document.querySelector('#general');
let checkbox = document.querySelector('#support');
let btn = document.querySelector('#button');
let output = document.querySelector('.output');
let form = document.querySelector('#contact');
let errorName = document.querySelector('.error-name')
let errorSurname = document.querySelector('.error-surname')
let errorEmail = document.querySelector('.error-email')
let errorQuery = document.querySelector('.error-query')
let errorMessage = document.querySelector('.error-message')
let errorCheckbox = document.querySelector('.error-checkbox')
let showSent = document.querySelector('.sent')
let backGeneral = document.querySelector('.r-gen')
let backSupport = document.querySelector('.r-sup')




function handleFormEntry(e) {
  e.preventDefault();
  if (form['name'].value !== '' && form['surname'].value !== '' && form['email'].value !== '' && form['checkbox'].checked !== false && (form['general'].checked !== false || form['support'].checked !== false)) {
    handleFormEdit()
    showSent.style.display = "inline-block";
    setTimeout(function () {
      showSent.style.display = "none";
    }, 2000);
  } 
  if (form['name'].value === '') {
    errorName.style.display = 'inline'
    form['name'].style.border = '1px solid rgba(215, 60, 60, 1)'
  } 
  if (form['surname'].value === '') {
    errorSurname.style.display = 'inline'
    form['surname'].style.border = '1px solid rgba(215, 60, 60, 1)'
  } 
  if (form['email'].value === '') {
    errorEmail.style.display = 'inline'
    form['email'].style.border = '1px solid rgba(215, 60, 60, 1)'
  } 
  if (form['message'].value === '') {
    errorMessage.style.display = 'inline'
    form['message'].style.border = '1px solid rgba(215, 60, 60, 1)'
  } 
  if (form['general'].checked === false && form['support'].checked === false) {
    errorQuery.style.display = 'inline'
  } 
  if (form['checkbox'].checked === false) {
    errorCheckbox.style.display= 'inline'
  }
}


function handleFormEdit() {

  output.innerHTML += `Ad: ${form['name'].value} <br>`;
  output.innerHTML += `Soyad: ${form['surname'].value} <br>`;
  output.innerHTML += `E-Posta: ${form['email'].value} <br>`;
  output.innerHTML += `Mesaj: ${form['message'].value} <br>`;
  if (general.checked === true) {
    output.innerHTML += 'Genel Sorgu ';
  } else {
    output.innerHTML += 'Destek Talebi ';
  }



}








btn.addEventListener('click', handleFormEntry);
form.addEventListener('submit', handleFormEntry);

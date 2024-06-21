let form = document.querySelector('.ageForm');
let submitBtn = document.querySelector('.submit');
let age = document.querySelector('.age');
let current = new Date();
let currentYear = current.getFullYear();

let dayError = document.querySelector('#dayError');
let monthError = document.querySelector('#monthError');
let yearError = document.querySelector('#yearError');

function validate(e) {
  e.preventDefault();

  if (form.day.value > 31 || form.day.value === 0 || form.day.value === '') {
    dayError.style.display = 'block'
  } else if (form.day.value <= 31 && form.day.value !== 0 && form.day.value !== '') {
    dayError.style.display = 'none'
  }
  if (form.month.value > 12 || form.month.value === 0 || form.month.value === '') {
    monthError.style.display = 'block'
  } else if (form.month.value <= 12 && form.month.value !== 0 && form.month.value !== '') {
    monthError.style.display = 'none'
  }
  if (form.year.value >= currentYear || form.year.value === 0 || form.year.value === '') {
    yearError.style.display = 'block'
  } else if (form.year.value < currentYear && form.year.value !== 0 && form.year.value !== '') {
    yearError.style.display = 'none'
  }




  form.classList.add('validated')
  if (form.day.value <= 31 && form.month.value <=12 && form.year.value < currentYear ) {
    if(form.checkValidity()) {
      calculateAge();
      
    }

  }


  

}



function calculateAge() {
  let birthdate = new Date(form.year.value, form.month.value, form.day.value) 

  let day1= birthdate.getDate();
  let month1= birthdate.getMonth();
  let year1= birthdate.getFullYear();

  let today = new Date();
  let day2= today.getDate();
  let month2= today.getMonth();
  let year2= today.getFullYear();

  let day3, month3, year3;
  year3 = year2 - year1

  if(month2 >= month1) {
    month3 = month2 - month1 +1
  } else {
    year3--;
    month3= 12 + month2 - month1
  }

  if(day2 >= day1) {
    day3 = day2 - day1
  } else {
    month3--;
    day3= getDaysInMonth(year1, month1) + day2 - day1;
  }

  if (month3 < 0) {
    month3 = 11;
    year3--;
  }

  age.innerHTML = `<h1><span class="purple">${year3}</span> yıl</h1>
      <h1><span class="purple">${month3}</span> ay</h1>
      <h1><span class="purple">${day3}</span> gün</h1>`

}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}


submitBtn.addEventListener('click', validate)

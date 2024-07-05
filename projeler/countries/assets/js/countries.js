let countries = [
  {
    countryName: "Turkey",
    population: 84200000,
    flag: "🇹🇷",
    famousFood: "Kebab",
    capitalCity: "Ankara"
  },
  {
    countryName: "Italy",
    population: 60480000,
    flag: "🇮🇹",
    famousFood: "Pizza",
    capitalCity: "Rome"
  },
  {
    countryName: "Japan",
    population: 125800000,
    flag: "🇯🇵",
    famousFood: "Sushi",
    capitalCity: "Tokyo"
  },
  {
    countryName: "Brazil",
    population: 212600000,
    flag: "🇧🇷",
    famousFood: "Feijoada",
    capitalCity: "Brasilia"
  },
  {
    countryName: "India",
    population: 1393000000,
    flag: "🇮🇳",
    famousFood: "Curry",
    capitalCity: "New Delhi"
  },
  {
    countryName: "France",
    population: 65270000,
    flag: "🇫🇷",
    famousFood: "Baguette",
    capitalCity: "Paris"
  },
  {
    countryName: "Mexico",
    population: 126000000,
    flag: "🇲🇽",
    famousFood: "Tacos",
    capitalCity: "Mexico City"
  },
  {
    countryName: "China",
    population: 1441000000,
    flag: "🇨🇳",
    famousFood: "Peking Duck",
    capitalCity: "Beijing"
  },
  {
    countryName: "Greece",
    population: 10420000,
    flag: "🇬🇷",
    famousFood: "Moussaka",
    capitalCity: "Athens"
  },
  {
    countryName: "Spain",
    population: 47350000,
    flag: "🇪🇸",
    famousFood: "Paella",
    capitalCity: "Madrid"
  },
  {
    countryName: "Germany",
    population: 83100000,
    flag: "🇩🇪",
    famousFood: "Bratwurst",
    capitalCity: "Berlin"
  },
  {
    countryName: "United States",
    population: 331900000,
    flag: "🇺🇸",
    famousFood: "Burger",
    capitalCity: "Washington, D.C."
  },
  {
    countryName: "South Korea",
    population: 51840000,
    flag: "🇰🇷",
    famousFood: "Kimchi",
    capitalCity: "Seoul"
  },
  {
    countryName: "Egypt",
    population: 104100000,
    flag: "🇪🇬",
    famousFood: "Koshary",
    capitalCity: "Cairo"
  },
  {
    countryName: "Russia",
    population: 145900000,
    flag: "🇷🇺",
    famousFood: "Borscht",
    capitalCity: "Moscow"
  },
  {
    countryName: "Australia",
    population: 25690000,
    flag: "🇦🇺",
    famousFood: "Vegemite",
    capitalCity: "Canberra"
  },
  {
    countryName: "Thailand",
    population: 69790000,
    flag: "🇹🇭",
    famousFood: "Pad Thai",
    capitalCity: "Bangkok"
  },
  {
    countryName: "Argentina",
    population: 45380000,
    flag: "🇦🇷",
    famousFood: "Asado",
    capitalCity: "Buenos Aires"
  },
  {
    countryName: "Canada",
    population: 38000000,
    flag: "🇨🇦",
    famousFood: "Poutine",
    capitalCity: "Ottawa"
  },
  {
    countryName: "South Africa",
    population: 59310000,
    flag: "🇿🇦",
    famousFood: "Biltong",
    capitalCity: "Pretoria"
  }
];



if (localStorage.countries) {
  countries = JSON.parse(localStorage.countries);
  renderCountries();
}



addCountryBtn.addEventListener('click', () => {
  modal.classList.remove('editModal');
  document.querySelector('input[name="countryName"]').value = '';
  modal.showModal();
});

function handleCountryForm() {
  let formData = new FormData(countriesForm);
  let formObj = Object.fromEntries(formData);
  countriesForm.reset();

  let coountryIndex = countries.findIndex(x => x.countryName === formObj.countryName);

  if (coountryIndex !== -1) {
    countries[coountryIndex].population = formObj.population;
    countries[coountryIndex].flag = formObj.flag;
    countries[coountryIndex].famousFood = formObj.famousFood;
    countries[coountryIndex].capitalCity = formObj.capitalCity;
  } else {
    countries.push(formObj);
  }


  save();
  renderCountries();
}


countriesForm.addEventListener('submit', handleCountryForm);


function save() {
  localStorage.countries = JSON.stringify(countries);
}

function createCountryHtml(country) {
  return `<div class="country">
    <div class="countryEditControls">
      <a class="countryEditBtn" href="#" data-cname="${country.countryName}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
      </a>
      <a class="countryDeleteBtn" href="#" data-cname="${country.countryName}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
      </a>
    </div>
    <p>Ülke Adı: <span>${country.countryName}</span></p>
    <p>Nüfus: <span>${country.population}</span></p>
    <p>Bayrak: <span>${country.flag}</span></p>
    <p>Ünlü Yemeği: <span>${country.famousFood}</span></p>
    <p>Başkent: <span>${country.capitalCity}</span></p>
  </div>`;
}

function handleDeleteBtn(e) {
  e.preventDefault();

  if (!confirm('Emin Misin?')) {
    return;
  }

  countries = countries.filter(x => x.countryName !== this.dataset.cname);

  save();
  renderCountries();
}




function handleEditBtn(e) {
  e.preventDefault();

  modal.classList.add('editModal');

  let countryN = this.dataset.cname;
  let country = countries.find(x => x.countryName === countryN);
  document.querySelector('input[name="countryName"]').value = country.countryName
  document.querySelector('input[name="population"]').value = country.population
  document.querySelector('input[name="flag"]').value = country.flag
  document.querySelector('input[name="famousFood"]').value = country.famousFood
  document.querySelector('input[name="capitalCity"]').value = country.capitalCity

  modal.showModal();
}

function renderCountries() {
  countriesContainer.innerHTML = countries.map(x => createCountryHtml(x)).join('');
  document.querySelectorAll('.countryDeleteBtn').forEach(x => x.addEventListener('click', handleDeleteBtn))
  document.querySelectorAll('.countryEditBtn').forEach(x => x.addEventListener('click', handleEditBtn))
}

function init() {
  renderCountries()
}

init();
let form = document.querySelector('.movieForm');
let btnSubmit = document.querySelector('.submit');
let btnReset = document.querySelector('.reset');
let regularList = document.querySelector('.regularList');
let cAction = document.querySelector('.action');
let cComedy = document.querySelector('.comedy');
let cHorror = document.querySelector('.horror');
let cFantasy = document.querySelector('.fantasy');
let cSciFi = document.querySelector('.sciFi');
let score = document.querySelector('.listByScore')
let movieList = [];

if(typeof localStorage.movieList !== 'undefined') {
  movieList = JSON.parse(localStorage.movieList);
  addMovie();
}


function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let formObj = Object.fromEntries(formData);
  movieList.push(formObj) 
  form.reset();



  save();
  addMovie();
}

function save() {
  localStorage.movieList = JSON.stringify(movieList);
}




function addMovie() {
  regularList.innerHTML = '';
  cAction.innerHTML = '<h3>Aksiyon</h3>';
  cComedy.innerHTML = '<h3>Komedi</h3>';
  cHorror.innerHTML = '<h3>Korku</h3>';
  cFantasy.innerHTML = '<h3>Fantezi</h3>';
  cSciFi.innerHTML = '<h3>Bilim Kurgu</h3>';
  score.innerHTML = '';
  for (let i = 0; i < movieList.length; i++) {
    regularList.innerHTML += `<div class="listGroup">
    <img src="${movieList[i].image}" alt="">
    <p>Film Adı: <span>${movieList[i].name}</span></p>
    <p>Konu: <span>${movieList[i].subject}</span></p>
    <p>Kategori: <span>${movieList[i].radio}</span></p>
    <p>Puan: <span>${movieList[i].score}</span></p>
    </div>`

    if (movieList[i].radio === 'Aksiyon') {
      cAction.innerHTML += `<div class="listGroup">
      <img src="${movieList[i].image}" alt="">
      <p>Film Adı: <span>${movieList[i].name}</span></p>
      <p>Konu: <span>${movieList[i].subject}</span></p>
      <p>Puan: <span>${movieList[i].score}</span></p>
      </div>`
    } else if (movieList[i].radio === 'Komedi') {
      cComedy.innerHTML += `<div class="listGroup">
      <img src="${movieList[i].image}" alt="">
      <p>Film Adı: <span>${movieList[i].name}</span></p>
      <p>Konu: <span>${movieList[i].subject}</span></p>
      <p>Puan: <span>${movieList[i].score}</span></p>
      </div>`
    } else if (movieList[i].radio === 'Korku') {
      cHorror.innerHTML += `<div class="listGroup">
      <img src="${movieList[i].image}" alt="">
      <p>Film Adı: <span>${movieList[i].name}</span></p>
      <p>Konu: <span>${movieList[i].subject}</span></p>
      <p>Puan: <span>${movieList[i].score}</span></p>
      </div>`
    } else if (movieList[i].radio === 'Fantezi') {
      cFantasy.innerHTML += `<div class="listGroup">
      <img src="${movieList[i].image}" alt="">
      <p>Film Adı: <span>${movieList[i].name}</span></p>
      <p>Konu: <span>${movieList[i].subject}</span></p>
      <p>Puan: <span>${movieList[i].score}</span></p>
      </div>`
    } else {
      cSciFi.innerHTML += `<div class="listGroup">
      <img src="${movieList[i].image}" alt="">
      <p>Film Adı: <span>${movieList[i].name}</span></p>
      <p>Konu: <span>${movieList[i].subject}</span></p>
      <p>Puan: <span>${movieList[i].score}</span></p>
      </div>`
    }
    let sortMovies = movieList.sort(({score:a}, {score:b}) => b-a);

    score.innerHTML += `<div class="listGroup">
    <img src="${sortMovies[i].image}" alt="">
    <p>Film Adı: <span>${sortMovies[i].name}</span></p>
    <p>Konu: <span>${sortMovies[i].subject}</span></p>
    <p>Kategori: <span>${sortMovies[i].radio}</span></p>
    <p>Puan: <span>${sortMovies[i].score}</span></p>
    </div>`
  }

  

}

function localReset() {
  localStorage.clear();
  movieList = [];
  addMovie();
};
form.addEventListener('submit', handleFormSubmit);

btnReset.addEventListener('click', localReset);
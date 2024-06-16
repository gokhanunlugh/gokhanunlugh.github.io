let form = document.querySelector('.grades');
let resetBtn = document.querySelector('.reset');
let allList = document.querySelector('.allList');
let machine = document.querySelector('.machine');
let chemical = document.querySelector('.chemical');
let civil = document.querySelector('.civil');
let gradeList = [];
if (typeof localStorage.gradeList !== 'undefined') {
  gradeList = JSON.parse(localStorage.gradeList);
  addGrades();
}

function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let formObj = Object.fromEntries(formData);
  gradeList.push(formObj);
  save();
  addGrades();
  
}

function save() {
  localStorage.gradeList = JSON.stringify(gradeList);
}

function addGrades() {
  allList.innerHTML = '';
  machine.innerHTML = '<h3>Makine Mühendisliği</h3>';
  chemical.innerHTML = '<h3>Kimya Mühendisliği</h3>';
  civil.innerHTML = '<h3>İnşaat Mühendisliği</h3>';
  for (let i = 0; i < gradeList.length; i++) {
    let grade = (Number(gradeList[i].midterm1) * 0.3) + (Number(gradeList[i].midterm2) * 0.3) + (Number(gradeList[i].final) * 0.4);
    let gradeL = '';
    if (Number(grade) >= 90) {
      gradeL = 'AA Başarılı'
    } else if (Number(grade) >= 85) {
      gradeL = 'BA Başarılı'
    } else if (Number(grade) >= 80) {
      gradeL = 'BB Başarılı'
    } else if (Number(grade) >= 75) {
      gradeL = 'CB Geçer'
    } else if (Number(grade) >= 70) {
      gradeL = 'CC Geçer'
    } else if (Number(grade) >= 65) {
      gradeL = 'DC Koşullu Geçer'
    } else if (Number(grade) >= 60) {
      gradeL = 'DD Koşullu Geçer'
    } else if (Number(grade) >= 85) {
      gradeL = 'FD Başarısız-Kalır'
    } else {
      gradeL = 'FF Başarısız-Kalır'
    }
    
    allList.innerHTML += `<div class="listGroup">
        <p>Ad:<span> ${gradeList[i].name}</span></p>
        <p>Soyad:<span> ${gradeList[i].lastName}</span></p>
        <p>Bölüm:<span> ${gradeList[i].section}</span></p>
        <p>Vize 1:<span> ${gradeList[i].midterm1}</span></p>
        <p>Vize 2:<span> ${gradeList[i].midterm2}</span></p>
        <p>Final:<span> ${gradeList[i].final}</span></p>
        <p>Not:<span> ${grade} ${gradeL}</span></p>
      </div>`

      if (gradeList[i].section === 'Makine') {
        machine.innerHTML +=  `<div class="listGroup">
        <p>Ad:<span> ${gradeList[i].name}</span></p>
        <p>Soyad:<span> ${gradeList[i].lastName}</span></p>
        <p>Vize 1:<span> ${gradeList[i].midterm1}</span></p>
        <p>Vize 2:<span> ${gradeList[i].midterm2}</span></p>
        <p>Final:<span> ${gradeList[i].final}</span></p>
        <p>Not:<span> ${grade} ${gradeL}</span></p>
      </div>`
      } else if (gradeList[i].section === 'Kimya') {
        chemical.innerHTML += `<div class="listGroup">
        <p>Ad:<span> ${gradeList[i].name}</span></p>
        <p>Soyad:<span> ${gradeList[i].lastName}</span></p>
        <p>Vize 1:<span> ${gradeList[i].midterm1}</span></p>
        <p>Vize 2:<span> ${gradeList[i].midterm2}</span></p>
        <p>Final:<span> ${gradeList[i].final}</span></p>
        <p>Not:<span> ${grade} ${gradeL}</span></p>
      </div>`
      } else {
        civil.innerHTML += `<div class="listGroup">
        <p>Ad:<span> ${gradeList[i].name}</span></p>
        <p>Soyad:<span> ${gradeList[i].lastName}</span></p>
        <p>Vize 1:<span> ${gradeList[i].midterm1}</span></p>
        <p>Vize 2:<span> ${gradeList[i].midterm2}</span></p>
        <p>Final:<span> ${gradeList[i].final}</span></p>
        <p>Not:<span> ${grade} ${gradeL}</span></p>
      </div>`
      }






    }
  }


  function localReset(){
    localStorage.clear();
    gradeList = [];
    addGrades();
  }


  form.addEventListener('submit', handleFormSubmit);
  resetBtn.addEventListener('click', localReset)


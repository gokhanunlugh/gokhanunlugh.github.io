let gradeList = [];
let id = 0;
let addBtn = document.querySelector('.addGradesBtn');


if (localStorage.gradeList) {
  gradeList = JSON.parse(localStorage.gradeList);
  renderGrades();
}

if (localStorage.id) {
  id = Number(localStorage.id)
}

function generateId() {
  id++;
  localStorage.id = id;
  return id;
}


addBtn.addEventListener('click', () => {
  modal.classList.remove('editModal');
  document.querySelector('input[name="id"]').value = '';
  modal.showModal();
})

function handleGradesForm() {
  let formData = new FormData(gradesForm);
  let formObj = Object.fromEntries(formData);
  gradesForm.reset();

  if(formObj.id !== '') {
    let student = gradeList.find(x => x.id === Number(formObj.id));
    student.firstName = formObj.firstName;
    student.lastName = formObj.lastName;
    student.section = formObj.section;
    student.midterm1 = formObj.midterm1;
    student.midterm2 = formObj.midterm2;
    student.final = formObj.final;
  } else {
    formObj.id = generateId();
    gradeList.push(formObj);
  }
  save();
  renderGrades();

}
gradesForm.addEventListener('submit', handleGradesForm);

function save() {
  localStorage.gradeList = JSON.stringify(gradeList)
}

function createGradesHtml(student) {
  let grade = (Number(student.midterm1) * 0.3) + (Number(student.midterm2) * 0.3) + (Number(student.final) * 0.4);
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


  return `<div class="grade">
        <div class="gradeEditControls">
          <a class="gradeEditBtn" href="#" data-studentid="${student.id}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
          </a>
          <a class="gradeDeleteBtn" href="#" data-studentid="${student.id}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
          </a>
        </div>
        <p>Ad: <span>${student.firstName}</span></p>
        <p>Soyad: <span>${student.lastName}</span></p>
        <p>Bölüm: <span>${student.section}</span></p>
        <p>Adres: <span>${student.midterm1}</span></p>
        <p>Adres: <span>${student.midterm2}</span></p>
        <p>Adres: <span>${student.final}</span></p>
        <p>Adres: <span>${grade} ${gradeL}</span></p>
        </div>`
}

function handleDeleteBtn(e) {
  e.preventDefault();
  if(!confirm('Emin Misiniz?')){
    return;
  }



  gradeList = gradeList.filter(x=> x.id !== Number(this.dataset.studentid));

  save();
  renderGrades();
}

function handleEditBtn(e) {
  e.preventDefault();
  modal.classList.add('editModal');

  let studentId = Number(this.dataset.studentid);
  let student = gradeList.find(x=> x.id === studentId);
  document.querySelector('input[name="id"]').value = student.id;
  document.querySelector('input[name="firstName"]').value = student.firstName;
  document.querySelector('input[name="lastName"]').value = student.lastName;
  document.querySelector('input[name="section"]').value = student.section;
  document.querySelector('input[name="midterm1"]').value = student.midterm1;
  document.querySelector('input[name="midterm2"]').value = student.midterm2;
  document.querySelector('input[name="final"]').value = student.final;
  modal.showModal();
}


function renderGrades() {

  gradesContainer.innerHTML = gradeList.map(x=> createGradesHtml(x)).join('');
  document.querySelectorAll('.gradeDeleteBtn').forEach(x=> x.addEventListener('click', handleDeleteBtn));
  document.querySelectorAll('.gradeEditBtn').forEach(x=> x.addEventListener('click', handleEditBtn));
}

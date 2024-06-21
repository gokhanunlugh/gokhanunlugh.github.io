let form = document.querySelector('.addressForm');
let resetBtn = document.querySelector('.reset');
let book = document.querySelector('.addressBook');
let editBtn = document.querySelector('.edit');
let deleteBtn = document.querySelector('.delete');
let bookList = [];
let editForm = document.querySelector('.bookEdit');
let cancelBtn = document.querySelector('.cancel');
let updateBtn = document.querySelector('.update');
let popupShow = document.querySelector('.popup');




if (typeof localStorage.bookList !== 'undefined') {
  bookList = JSON.parse(localStorage.bookList)
  addAddress();

}




function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let formObj = Object.fromEntries(formData);
  bookList.push(formObj);

 
  save();
  addAddress();

}
  
function save() {
  localStorage.bookList = JSON.stringify(bookList);
}


function addAddress() {
  book.innerHTML = '';

  for (let i = 0; i < bookList.length; i++) {
    book.innerHTML += `<div ondblclick="allowEdit()" class="addressGroup" id="${bookList[i].number}">
        <p>Ad: <span>${bookList[i].firstName}</span></p>
        <p>Soyad: <span>${bookList[i].lastName}</span></p>
        <p>Telefon: <span>${bookList[i].number}</span></p>
        <p>Adres: <span>${bookList[i].address}</span></p>
      </div>
    `
  }

}



let divClick = document.querySelector('.addressGroup')






function allowEdit() {
  popupShow.style.display ='flex'

}
function localReset() {
  localStorage.clear();
  bookList = [];
  addAddress();
}

function openPopup() {
  popupShow.style.display ='flex'
}

function closePopup(e) {
  e.preventDefault();
  let clicked = divClick.firstChild.id;
  let currentText = document.getElementById(clicked);

  currentText.innerHTML = `<div ondblclick="openPopup()" class="addressGroup" id="${editForm.editNumber.value}">
  <p>Ad: <span>${editForm.editName.value}</span></p>
  <p>Soyad: <span>${editForm.editLastName.value}</span></p>
  <p>Telefon: <span>${editForm.editNumber.value}</span></p>
  <p>Adres: <span>${editForm.editAddress.value}</span></p>
</div>
`
  
  popupShow.style.display = 'none'

}



function updateBook() {
  
  


}













form.addEventListener('submit', handleFormSubmit);
resetBtn.addEventListener('click', localReset);
editForm.addEventListener('submit', closePopup);
cancelBtn.addEventListener('click', closePopup);
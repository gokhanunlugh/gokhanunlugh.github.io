let todoList = [];
let id = 0;
let addBtn = document.querySelector('add-task');



if (localStorage.todoList) {
  todoList = JSON.parse(localStorage.todoList);
  renderAddress();
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

function handleAddressForm() {
  let formData = new FormData(addressForm);
  let formObj = Object.fromEntries(formData);
  addressForm.reset();

  if(formObj.id !== '') {
    let adres = addressBook.find(x => x.id === Number(formObj.id));
    adres.firstName = formObj.firstName;
    adres.lastName = formObj.lastName;
    adres.number = formObj.number;
    adres.addressText = formObj.addressText;
  } else {
    formObj.id = generateId();
    addressBook.push(formObj);
  }
  save();
  renderAddress();

}

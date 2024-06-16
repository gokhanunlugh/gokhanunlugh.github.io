let form = document.querySelector('.products');
let resetBtn = document.querySelector('.reset')
let total = document.querySelector('.totalPrice');
let computer = document.querySelector('.computer');
let phone = document.querySelector('.phone');
let household = document.querySelector('.household');
let television = document.querySelector('.television');
let accessory = document.querySelector('.accessory');
let regularList = document.querySelector('.regularList');

let productList = [];

if (typeof localStorage.productList !== 'undefined') {
  productList = JSON.parse(localStorage.productList);
  addProduct();
}


function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let formObj = Object.fromEntries(formData);
  productList.push(formObj);
  save();
  addProduct();

};


function save() {
  localStorage.productList = JSON.stringify(productList);
};
function addProduct() {
  regularList.innerHTML = '';
  total.innerHTML = '';
  computer.innerHTML = '<h3>Bilgisayar</h3>';
  phone.innerHTML = '<h3>Telefon</h3>';
  household.innerHTML = '<h3>Beyaz Eşya</h3>';
  television.innerHTML = '<h3>Televizyon</h3>';
  accessory.innerHTML = '<h3>Telefon Aksesuar</h3>';
  let totalPrice = 0;

  for (let i = 0; i < productList.length; i++) {
    regularList.innerHTML += `<div class="listGroup">
      <img src="${productList[i].image}" alt="">
      <p>Ürün Adı: <span>${productList[i].name}</span></p>
      <p>Fiyatı: <span>${productList[i].price}</span></p>
      <p>Kategori: <span>${productList[i].radio}</span></p>
      <p>Detay: <span>${productList[i].description}</span></p>
    </div>
`
    totalPrice += Number(productList[i].price)
    total.innerHTML = totalPrice;

    if (productList[i].radio === 'Bilgisayar') {
      computer.innerHTML += `<div class="listGroup">
      <img src="${productList[i].image}" alt="">
      <p>Ürün Adı: <span>${productList[i].name}</span></p>
      <p>Fiyatı: <span>${productList[i].price}</span></p>
      <p>Detay: <span>${productList[i].description}</span></p>
    </div>
`
    } else if (productList[i].radio === 'Telefon') {
      phone.innerHTML += `<div class="listGroup">
      <img src="${productList[i].image}" alt="">
      <p>Ürün Adı: <span>${productList[i].name}</span></p>
      <p>Fiyatı: <span>${productList[i].price}</span></p>
      <p>Detay: <span>${productList[i].description}</span></p>
    </div>
`
    } else if (productList[i].radio === 'Beyaz Eşya') {
      household.innerHTML += `<div class="listGroup">
      <img src="${productList[i].image}" alt="">
      <p>Ürün Adı: <span>${productList[i].name}</span></p>
      <p>Fiyatı: <span>${productList[i].price}</span></p>
      <p>Detay: <span>${productList[i].description}</span></p>
    </div>
`
    } else if (productList[i].radio === 'Televizyon') {
      television.innerHTML += `<div class="listGroup">
      <img src="${productList[i].image}" alt="">
      <p>Ürün Adı: <span>${productList[i].name}</span></p>
      <p>Fiyatı: <span>${productList[i].price}</span></p>
      <p>Detay: <span>${productList[i].description}</span></p>
    </div>
`
    } else {
      accessory.innerHTML += `<div class="listGroup">
      <img src="${productList[i].image}" alt="">
      <p>Ürün Adı: <span>${productList[i].name}</span></p>
      <p>Fiyatı: <span>${productList[i].price}</span></p>
      <p>Detay: <span>${productList[i].description}</span></p>
    </div>
`
    }
  }
};


function localReset() {
  localStorage.clear()
  totalPrice = 0;
  productList = [];
  addProduct();
}



form.addEventListener('submit', handleFormSubmit);
resetBtn.addEventListener('click', localReset);
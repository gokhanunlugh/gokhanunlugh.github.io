let products = [];
let basket = [];

function createItemHtml(product) {
  return `<div class="dessert" id="dessert">
    <div class="dessertImg">
      <img class="dImg" src="${product.image.desktop}" alt="${product.name}">
      <button data-id="${product.id}"> <img class="cartImg" src="/assets/img/carbon_shopping-cart-plus.svg" alt="">  Add to cart</button>
    </div>
    <sub>${product.category}</sub>
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
  </div>`;
}

function handleAddBtnClick() {
  addToBasket(Number(this.dataset.id));
}

function addToBasket(productId) {
  const basketItem = basket.find(x => x.productId === productId);

  if(basketItem) {
    basketItem.quantity++;
  } else {
    const product = products.find(x => x.id === productId);
    basket.push(
      {
        productId: product.id,
        name: product.name,
        price: product.price,
        thumbnail: product.image.thumbnail,
        quantity: 1
      }
    );
  }
  
  renderBasket();
}

function renderBasket() {
  cartGrid.innerHTML = basket.map(x => `<div class="dessertCart">
          <div class="dessertCartContent">
            <p>${x.name}</p>
            <p><span class="cartSpan">${x.quantity}x</span> &ThickSpace; &ThickSpace; @ $${x.price} &ThickSpace; <strong>$${x.quantity * x.price}</strong></p>
          </div>
          <a data-productid="${x.productId}" class="deleteFromBasket" href="#"><img src="/assets/img/Button-RemoveItem.svg" alt=""></a>
        </div>`).join('');

  document.querySelectorAll('.deleteFromBasket').forEach(x => x.addEventListener('click', handleDeleteBtn));

  total.innerHTML = `<p>Order Total</p> <h3>  $`+  basket.reduce((currentValue, item) => currentValue + (item.quantity * item.price), 0) + '</h3>';

  cartTotal.innerHTML = '(' + basket.reduce(function(currentValue, item) {
    return currentValue + item.quantity;
  }, 0) + ')';
}

function handleDeleteBtn(e) {
  e.preventDefault();
  basket = basket.filter(x => x.productId !== Number(this.dataset.productid));
  renderBasket();
}


function handleConfirmBtn() {
  modal.showModal();
  dialogOrder.innerHTML = basket.map(x=> `<div class="orders">
          <img class="thumbnail" src="${x.thumbnail}" alt="">
          <div class="orderContext">
            <p><strong>${x.name}</strong></p>
            <p>${x.quantity}x &ThickSpace; &ThickSpace; <span>@ $${x.price} </span></p>
          </div>
          <p><strong>$${x.quantity * x.price} </strong></p>
        </div>`).join('');
  modalTotal.innerHTML = `<p>Order Total</p> <h3>  $ `+  basket.reduce((currentValue, item) => currentValue + (item.quantity * item.price), 0) + '</h3>';
  basket = [];
  renderBasket();
}

newOrder.addEventListener('click', startNewOrder)

function startNewOrder() {
  modal.close();

}


confirmBtn.addEventListener('click', handleConfirmBtn)

fetch('https://dummyjson.czaylabs.com.tr/api/products')
  .then(res => res.json())
  .then(res => {
    products = res.data;
    dessertGrid.innerHTML = products.map(product => createItemHtml(product)).join('');
    document.querySelectorAll('.dessertImg button').forEach(x => x.addEventListener('click', handleAddBtnClick));
  });
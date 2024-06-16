let blogForm = document.querySelector('.blogs');
let submitBtn = document.querySelector('.submit');
let resetBtn = document.querySelector('.reset');
let list = document.querySelector('.blogList');
let blogList = [];

if(typeof localStorage.blogList !== 'undefined') {
  blogList = JSON.parse(localStorage.blogList);
  addBlog();
}


function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(blogForm);
  let formObj = Object.fromEntries(formData);
  blogList.push(formObj) 
  blogForm.reset();



  save();
  addBlog();
}

function save() {
  localStorage.blogList = JSON.stringify(blogList);
}


function addBlog() {
  list.innerHTML = ''
  for (let i = 0; i < blogList.length; i++) {
    list.innerHTML += `<div class="listGroup">
    <img src="${blogList[i].image}" alt="">
    <p>Başlık: ${blogList[i].title}</p>
    <p>Açıklama: ${blogList[i].description}</p>
    <p>Yazar: ${blogList[i].writer}</p>
    <p>Kategori ${blogList[i].category}</p>
    </div>
        `;
  }


}


function resetLocal() {
  localStorage.clear();
  blogList = [];
  addBlog();
};



blogForm.addEventListener('submit', handleFormSubmit);
resetBtn.addEventListener('click', resetLocal)
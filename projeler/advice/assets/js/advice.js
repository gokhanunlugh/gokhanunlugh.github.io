let btn = document.querySelector('#generatorBtn')

function renderAdvice(res){
    advice.innerHTML = `
      <h4>ADVICE #${res.slip.id}</h4>
      <p>${res.slip.advice}</p>
    `;
      
}




function init() {
  fetch('https://api.adviceslip.com/advice', {
    cache: 'no-store'
  })
  .then(res => res.json())
  .then(res =>  {
    renderAdvice(res);
    
  })
}



btn.addEventListener('click',init)
init();
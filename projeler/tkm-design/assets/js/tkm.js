let gameStart = document.querySelector('.game');
let resultShow = document.querySelector('.game-result');
let oyuncusecim;
let tas = document.querySelector('.rock');
let kagıt = document.querySelector('.paper');
let makas = document.querySelector('.scissors');
let result = document.querySelector('.result');
let resultText = document.querySelector('.result-text');
let oyuncuhamle = document.querySelector('.choice');
let evhamle = document.querySelector('.comp-choice');
let counter = document.querySelector('.counter')
let hareketler = [tas, kagıt, makas];
let rastgele = Math.round(Math.random() * 2);
let bilgisayarHamle = hareketler[rastgele];
let again = document.querySelector('.again')



resultShow.style.display = "none";
// let oyuncu =  document.querySelector('.paper').value


let toplam = 0;

function game(oyuncusecim) {
    oyuncuhamle.innerHTML = oyuncusecim.innerHTML;
    evhamle.innerHTML = bilgisayarHamle.innerHTML;
    gameStart.style.display = "none";
    result.style.display = "flex";
    resultShow.style.display = "flex";
    if (oyuncusecim.innerHTML === bilgisayarHamle.innerHTML) {
        resultText.innerText = "Berabere";
    } else if (oyuncusecim.innerHTML === tas.innerHTML && bilgisayarHamle.innerHTML === kagıt.innerHTML) {
        resultText.innerText = "Oyuncu Kaybetti";
        toplam--;
        counter.innerText = toplam;
    } else if (oyuncusecim.innerHTML === kagıt.innerHTML && bilgisayarHamle.innerHTML === makas.innerHTML) {
        resultText.innerText = "Oyuncu Kaybetti";
        toplam--;
        counter.innerText = toplam;
    } else if (oyuncusecim.innerHTML === makas.innerHTML && bilgisayarHamle.innerHTML === tas.innerHTML) {
        resultText.innerText = "Oyuncu Kaybetti";
        toplam--;
        counter.innerText = toplam;
    } else {
        resultText.innerText = "Oyuncu Kazandı";
        toplam++;
        counter.innerText = toplam;
    }
    return bilgisayarHamle;
}


function handleResetClick() {
    gameStart.style.display = "flex";
    result.style.display = "flex";
    resultShow.style.display = "none";
    let randomchoice = Math.round(Math.random() * 2);
    bilgisayarHamle = hareketler[randomchoice];
  }
  
 again.addEventListener("click", handleResetClick);



console.log(bilgisayarHamle)



let hareketler = ['Taş', 'Kağıt', 'Makas'];

let rastgele = Math.round(Math.random() * 2);

let bilgisayarHamle = hareketler[rastgele];


let oyuncu =  prompt('Taş, Kağıt, Makas');

console.log(bilgisayarHamle)

if (oyuncu == 'Taş' && bilgisayarHamle == 'Kağıt') {
    console.log('Kaybettiniz.');
} else if (oyuncu == 'Taş' && bilgisayarHamle == 'Makas') {
    console.log('Tebrikler. Kazandınız.');
} else if (oyuncu == 'Kağıt' && bilgisayarHamle == 'Makas') {
    console.log('Kaybettiniz.');
} else if (oyuncu == 'Kağıt' && bilgisayarHamle == 'Taş') {
    console.log('Tebrikler. Kazandınız.');
} else if (oyuncu == 'Makas' && bilgisayarHamle == 'Taş') {
    console.log('Kaybettiniz.');
} else if (oyuncu == 'Makas' && bilgisayarHamle == 'Kağıt') {
    console.log('Tebrikler. Kazandınız.');
} else if  (oyuncu == 'Taş' && bilgisayarHamle == 'Taş') {
    console.log('Berabere.');
} else if  (oyuncu == 'Kağıt' && bilgisayarHamle == 'Kağıt') {
    console.log('Berabere.');
} else if  (oyuncu == 'Makas' && bilgisayarHamle == 'Makas') {
    console.log('Berabere.');
} else {
    console.log('Geçerli bir seçim yapınız.');
}
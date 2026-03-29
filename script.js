const calculate = document.getElementById('calculate');
const current = document.getElementById('current');
const controls = document.getElementById('controls');

//циферки
const one = current.querySelector('1');
const two = current.querySelector('2');
const three = current.querySelector('3');
const four = current.querySelector('4');
const five = current.querySelector('5');
const six = current.querySelector('6');
const seven = current.querySelector('7');
const eight = current.querySelector('8');
const nine = current.querySelector('9');
const zero = current.querySelector('0');
//кнопочки
const AC = current.querySelector('AC');
const backsp = current.querySelector('backsp');
const percent = current.querySelector('%');
const del = current.querySelector('/');
const multiply = current.querySelector('*');
const minus = current.querySelector('-');
const plus = current.querySelector('+');
const equal = current.querySelector('=');
const radix = current.querySelector('√x');
const degree = current.querySelector('x²')
//при нажатии на цифры
one.addEventListener('click', function ones(){
    current.textContent = current.textContent*10 + 1;
    
});
two.addEventListener('click', function twos(){
    current.textContent = current.textContent*10 + 2;
});
three.addEventListener('click', function threes(){
    current.textContent = current.textContent*10 + 3;
});
four.addEventListener('click', function fours(){
    current.textContent = current.textContent*10 + 4;
});
five.addEventListener('click', function fives(){
    current.textContent = current.textContent*10 + 5;
});
six.addEventListener('click', function sixs(){
    current.textContent = current.textContent*10 + 6;
});
seven.addEventListener('click', function sevens(){
    current.textContent = current.textContent*10 + 7;
});
eight.addEventListener('click', function eights(){
    current.textContent = current.textContent*10 + 8;
});
nine.addEventListener('click', function nines(){
    current.textContent = current.textContent*10 + 9;
});
zero.addEventListener('click', function zeros(){
    current.textContent = current.textContent*10 + 0;
});




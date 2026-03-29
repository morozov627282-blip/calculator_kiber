const calculate = document.getElementById('calculate');
const current = document.getElementById('current');
const controls = document.getElementById('controls');

//циферки
const one = controls.querySelector('1');
const two = controls.querySelector('2');
const three = controls.querySelector('3');
const four = controls.querySelector('4');
const five = controls.querySelector('5');
const six = controls.querySelector('6');
const seven = controls.querySelector('7');
const eight = controls.querySelector('8');
const nine = controls.querySelector('9');
const zero = controls.querySelector('0');
//кнопочки
const AC = controls.querySelector('AC');
const backsp = controls.querySelector('backsp');
const percent = controls.querySelector('%');
const del = controls.querySelector('/');
const multiply = controls.querySelector('*');
const minus = controls.querySelector('-');
const plus = controls.querySelector('+');
const equal = controls.querySelector('=');
const radix = controls.querySelector('√x');
const degree = controls.querySelector('x²')
//при нажатии на цифры
one.addEventListener('click', function ones(){
    if ope
    
});
two.addEventListener('click', function twos(){

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




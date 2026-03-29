const calculate = document.getElementById('calculate');
const current = document.getElementById('current');
const controls = document.getElementById('controls');

//циферки
const one = current.querySelector('button[data-value="1"]');
const two = current.querySelector('button[data-value="2"]');
const three = current.querySelector('button[data-value="3"]');
const four = current.querySelector('button[data-value="4"]');
const five = current.querySelector('button[data-value="5"]');
const six = current.querySelector('button[data-value="6"]');
const seven = current.querySelector('button[data-value="7"]');
const eight = current.querySelector('button[data-value="8"]');
const nine = current.querySelector('button[data-value="9"]');
const zero = current.querySelector('button[data-value="0"]');
//кнопочки
const AC = current.querySelector('button[data-value="AC"]');
const backsp = current.querySelector('button[data-value="backsp"]');
const percent = current.querySelector('button[data-value="%"]');
const del = current.querySelector('button[data-value="/"]');
const multiply = current.querySelector('button[data-value="*"]');
const minus = current.querySelector('button[data-value="-"]');'x²
const plus = current.querySelector('button[data-value="+"]');
const equal = current.querySelector('button[data-value="="]');
const radix = current.querySelector('button[data-value="√x"]');
const degree = current.querySelector('button[data-value="x²"')
//при нажатии на цифры


























































































/*one.addEventListener('click', function ones(){
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
});*\

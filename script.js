const calculate = document.getElementById('calculate');
const current = document.getElementById('current');
const controls = document.getElementById('controls');

//current.textContent=1

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



one.addEventListener('click', function ones(){
    current=+1;
});
two.addEventListener('click', function twos(){
    current=+1;
});
three.addEventListener('click', function threes(){
    current=+1;
});
four.addEventListener('click', function fours(){
    current=+1;
});
five.addEventListener('click', function fives(){
    current=+1;
});
six.addEventListener('click', function sixs(){
    current=+1;
});
seven.addEventListener('click', function sevens(){
    current=+1;
});
eight.addEventListener('click', function eights(){
    current=+1;
});
nine.addEventListener('click', function nines(){
    current=+1;
});
zero.addEventListener('click', function zeros(){
    current=+1;
});

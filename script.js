const calculate = document.getElementById('calculate');
const current = document.getElementById('current');\
const controls = document.getElementById('controls');
const opperate;

//циферки
const one = contorls.querySelector('button[data-value="1"]');
const two = contorls.querySelector('button[data-value="2"]');
const three = contorls.querySelector('button[data-value="3"]');
const four = contorls.querySelector('button[data-value="4"]');
const five = contorls.querySelector('button[data-value="5"]');
const six = contorls.querySelector('button[data-value="6"]');
const seven = contorls.querySelector('button[data-value="7"]');
const eight = contorls.querySelector('button[data-value="8"]');
const nine = contorls.querySelector('button[data-value="9"]');
const zero = contorls.querySelector('button[data-value="0"]');
//кнопочки
const AC = contorls.querySelector('button[data-value="AC"]');
const backsp = contorls.querySelector('button[data-value="backsp"]');
const percent = contorls.querySelector('button[data-value="%"]');
const del = contorls.querySelector('button[data-value="/"]');
const multiply = contorls.querySelector('button[data-value="*"]');
const minus = contorls.querySelector('button[data-value="-"]');
const plus = contorls.querySelector('button[data-value="+"]');
const equal = contorls.querySelector('button[data-value="="]');
const radix = contorls.querySelector('button[data-value="sqrt"]');
const degree = contorls.querySelector('button[data-value="square"')

plus.addEventListener('click', function plus(){
    opperate = "+";
});
minus.addEventListener('click', function minus(){
    opperate = "-";
});
multiply.addEventListener('click', function multiply(){
    opperate = "*";
});
del.addEventListener('click', function del(){
    opperate = "/";
});
percent.addEventListener('click', function percent(){
    opperate = "%";
});
degree.addEventListener('click', function degree(){
    opperate = "**";
});
sqrt.addEventListener('click' , function sqrt(){
    operate = "sqrt"
});

one.addEventListener('click', function oneaction(){
    if (opperate == "+"){
        current.textContent = current.textContent + 1;
    }
    else if(opperate == "-"){
        current.textContent = current.textContent - 1;
    }
    else if(opperate == "*"){
        current.textContent = current.textContent * 1;
    }
    else if(opperate == "/"){
        current.textContent = current.textContent / 1;
    }
    else if(operate == "%"){
        current.textContent = current.textContent % 1;
    }
    else if(operate == "**"){
        current.textContent = current.textContent ** 1;
    }
    else if(operate == "sqrt"){
        current.textContent = current.textContent ** 0.5;
    }
});
two.addEventListener('click', function twoaction(){
    if (opperate == "+"){
        current.textContent = current.textContent + 2;
    }
    else if(opperate == "-"){
        current.textContent = current.textContent - 2;
    }
    else if(opperate == "*"){
        current.textContent = current.textContent * 2;
    }
    else if(opperate == "/"){
        current.textContent = current.textContent / 2;
    }
    else if(operate == "%"){
        current.textContent = current.textContent % 2;
    }
    else if(operate == "**"){
        current.textContent = current.textContent ** 2;
    }
    else if(operate == "sqrt"){
        current.textContent = current.textContent ** 0.5;
    }
});
three.addEventListener('click', function threeaction(){
    if (opperate == "+"){
        current.textContent = current.textContent + 3;
    }
    else if(opperate == "-"){
        current.textContent = current.textContent - 3;
    }
    else if(opperate == "*"){
        current.textContent = current.textContent * 3;
    }
    else if(opperate == "/"){
        current.textContent = current.textContent / 3;
    }
    else if(operate == "%"){
        current.textContent = current.textContent % 3;
    }
    else if(operate == "**"){
        current.textContent = current.textContent ** 3;
    }
    else if(operate == "sqrt"){
        current.textContent = current.textContent ** 0.5;
    }
});
four.addEventListener('click', function fouraction(){
    if (opperate == "+"){
        current.textContent = current.textContent + 4;
    }
    else if(opperate == "-"){
        current.textContent = current.textContent - 4;
    }
    else if(opperate == "*"){
        current.textContent = current.textContent * 4;
    }
    else if(opperate == "/"){
        current.textContent = current.textContent / 4;
    }
    else if(operate == "%"){
        current.textContent = current.textContent % 4;
    }
    else if(operate == "**"){
        current.textContent = current.textContent ** 4;
    }
    else if(operate == "sqrt"){
        current.textContent = current.textContent ** 0.5;
    }
});
five.addEventListener('click', function fiveaction(){
    if (opperate == "+"){
        current.textContent = current.textContent + 5;
    }
    else if(opperate == "-"){
        current.textContent = current.textContent - 5;
    }
    else if(opperate == "*"){
        current.textContent = current.textContent * 5;
    }
    else if(opperate == "/"){
        current.textContent = current.textContent / 5;
    }
    else if(operate == "%"){
        current.textContent = current.textContent % 5;
    }
    else if(operate == "**"){
        current.textContent = current.textContent ** 5;
    }
    else if(operate == "sqrt"){
        current.textContent = current.textContent ** 0.5;
    }
});
six.addEventListener('click', function sixaction(){
    if (opperate == "+"){
        current.textContent = current.textContent + 6;
    }
    else if(opperate == "-"){
        current.textContent = current.textContent - 6;
    }
    else if(opperate == "*"){
        current.textContent = current.textContent * 6;
    }
    else if(opperate == "/"){
        current.textContent = current.textContent / 6;
    }
    else if(operate == "%"){
        current.textContent = current.textContent % 6;
    }
    else if(operate == "**"){
        current.textContent = current.textContent ** 6;
    }
    else if(operate == "sqrt"){
        current.textContent = current.textContent ** 0.5;
    }
});
seven.addEventListener('click', function sevenaction(){
    if (opperate == "+"){
        current.textContent = current.textContent + 7;
    }
    else if(opperate == "-"){
        current.textContent = current.textContent - 7;
    }
    else if(opperate == "*"){
        current.textContent = current.textContent * 7;
    }
    else if(opperate == "/"){
        current.textContent = current.textContent / 7;
    }
    else if(operate == "%"){
        current.textContent = current.textContent % 7;
    }
    else if(operate == "**"){
        current.textContent = current.textContent ** 7;
    }
    else if(operate == "sqrt"){
        current.textContent = current.textContent ** 0.5;
    }
});
eight.addEventListener('click', function eightaction(){
    if (opperate == "+"){
        current.textContent = current.textContent + 8;
    }
    else if(opperate == "-"){
        current.textContent = current.textContent - 8;
    }
    else if(opperate == "*"){
        current.textContent = current.textContent * 8;
    }
    else if(opperate == "/"){
        current.textContent = current.textContent / 8;
    }
    else if(operate == "%"){
        current.textContent = current.textContent % 8;
    }
    else if(operate == "**"){
        current.textContent = current.textContent ** 8;
    }
    else if(operate == "sqrt"){
        current.textContent = current.textContent ** 0.5;
    }
});
nine.addEventListener('click', function nineaction(){
    if (opperate == "+"){
        current.textContent = current.textContent + 9;
    }
    else if(opperate == "-"){
        current.textContent = current.textContent - 9;
    }
    else if(opperate == "*"){
        current.textContent = current.textContent * 9;
    }
    else if(opperate == "/"){
        current.textContent = current.textContent / 9;
    }
    else if(operate == "%"){
        current.textContent = current.textContent % 9;
    }
    else if(operate == "**"){
        current.textContent = current.textContent ** 9;
    }
    else if(operate == "sqrt"){
        current.textContent = current.textContent ** 0.5;
    }
});
zero.addEventListener('click', function zeroaction(){
    if (opperate == "+"){
        current.textContent = current.textContent + 0;
    }
    else if(opperate == "-"){
        current.textContent = current.textContent - 00;
    }
    else if(opperate == "*"){
        current.textContent = current.textContent * 0;
    }
    else if(opperate == "/"){
        window.alert('На 0 делить нельзя');
    }
    else if(operate == "%"){
        current.textContent = current.textContent % 0;
    }
    else if(operate == "**"){
        current.textContent = current.textContent ** 0;
    }
    else if(operate == "sqrt"){
        current.textContent = current.textContent ** 0.5;
    }
});
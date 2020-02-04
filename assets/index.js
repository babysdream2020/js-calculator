/**
 * Created by 1 on 2/3/2020.
 */
function add_num( num){
    var old_value =document.getElementById("calculator-display").innerHTML;
    var start = document.getElementById('start').value;
    if(start == 0){
        document.getElementById("calculator-display").innerHTML = num;
        document.getElementById('start').value = 1;
    }
    else{
        document.getElementById("calculator-display").innerHTML = old_value + num ;
    }
}
function add_action(opt){
    var old = document.getElementById('old_value').value;
    var current = parseFloat(document.getElementById("calculator-display").innerHTML).toFixed(2);

    var operator = document.getElementById('operator').value;

    var result = current;
    switch(operator) {
        case '1':
            result = old + current;
            break;
        case '2':
            result = old - current;
            break;
        case '3':
            result = old * current;
            break;
        case '4':
            result = old / current;
            break;
        default:
        // code block
    }
    document.getElementById("old_value").value = result;
    document.getElementById("calculator-display").innerHTML = result;
    document.getElementById('operator').value = opt;
    document.getElementById('start').value = 0;
}
function calculate(){
    var old = parseFloat(document.getElementById('old_value').value);
    var current = parseFloat(document.getElementById("calculator-display").innerHTML).toFixed(2);
    var operator = document.getElementById('operator').value;
    var result = current;
    switch(operator) {
        case '1':
            result = old + current;
            break;
        case '2':
            result = old - current;
            break;
        case '3':
            result = old * current;
            break;
        case '4':
            result = old / current;
            break;
        default:
        // code block
    }
    document.getElementById("old_value").value = 0;
    document.getElementById("calculator-display").innerHTML = result;
    document.getElementById('operator').value = 0;
    document.getElementById('start').value = 0;
}

function clear_cal(){
    document.getElementById('start').value = 0;
    document.getElementById("calculator-display").innerHTML = 0;
    document.getElementById('operator').value = 0;
}

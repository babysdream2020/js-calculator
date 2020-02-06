/**
 * Created by 1 on 2/3/2020.
 */


$(document).ready(function(){
    var displayValue = '0';
    $('#calculator-display').text(displayValue);

    $('.number').each(function(index, number){
        $(this).click(function(e){
            if(displayValue == '0') displayValue = '';
            if($(this).text() == 'C')
            {
                displayValue = '0';
                $('#calculator-display').text(displayValue);
            }
            else if($(this).text() == '=')
            {
                try
                {
                    displayValue = eval(displayValue);
                    $('#calculator-display').text(displayValue);
                    displayValue = '0';
                }
                catch (e)
                {
                    displayValue = '0';
                    $('#calculator-display').text('ERROR');
                }
            }
            else
            {
                displayValue += $(this).text();
                $('#calculator-display').text(displayValue);
            }
            e.preventDefault()
        })
    })
})


$(document).ready(function() {
    $("button").on('click',function (e) {
        $(".number").click(function () {
            add_num();
        });
        $(".key-operator").click(function () {
            add_action();
        });

        $(".clear").click(function () {
            clear_cal();
        });
        $(".calculator-keys").click(function () {
            calculate();
        });


    })
});



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
    var old = parseFloat(document.getElementById('old_value').value);
    var current = parseFloat(document.getElementById("calculator-display").innerHTML);

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
    var current = parseFloat(document.getElementById("calculator-display").innerHTML);
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

//mouse move
var cal = document.getElementById("calculator");

var moving = false;

cal.addEventListener("mouseDown", initialClick, false);
cal.addEventListener("mouseUp", initialmouseUp, false);



function move(e){

    var newX = e.clientX - 10;
    var newY = e.clientY - 10;

    image.style.left = newX + "px";
    image.style.top = newY + "px";


}
function  initialmouseUp(e){
    document.removeEventListener("mouseMove", move);
    moving = !moving;
}


function initialClick(e) {
    moving = !moving;
    image = this;

    document.addEventListener("mouseMove", move, false);

}



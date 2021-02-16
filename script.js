// 1 задание
var digits = {};

splittingOnDigits();

function splittingOnDigits(){
    number = +prompt("Введите число от 0 до 999", 0);
    while(isNaN(number)){
        alert("Введите коректное число");
        number = +prompt("Введите число от 0 до 999");
    }
    var array = number.toString().split("").map(Number);
    if(array.length == 3){
        digits.hundreds = array[0];
        digits.dozens = array[1];
        digits.units = array[2];
    }
    if(array.length == 2){
        digits.dozens = array[0];
        digits.units = array[1];
    }
    if(array.length == 1){
        digits.units = array[0];
    }
    
    console.log(digits);
}
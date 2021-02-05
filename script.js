/*
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2, так как ++ стоит до a, то в a присваиваться 2 а потом выводиться c
d = b++; alert(d);           // 1, здесь наоборот сначала выводиться, а потом присваивается в b = 2 
c = (2+ ++a); alert(c);      // 5, такой же подход как и в первых вычеслениях
d = (2+ b++); alert(d);      // 4, такой же подход как и в первых вычеслениях
alert(a);                    // 3
alert(b);                    // 3
*/

/* 
var a = 2; 
var x = 1 + (a *= 2); // (a *= 2)  = 4 сначала вычисляется это, далее прибавляется 1 ==> x = 5
*/

/*
var a = 15, b = -4;
if(a >= 0 && b >= 0){
    alert(a - b);
} else if (a < 0 && b < 0){
    alert(a * b);
} else {
    alert(a + b);
}
*/

/*
a = +prompt ('Введите число от 1 до 15');
		switch (a) {
		case 1:
			alert ( 'Ваше число 1');
			break;
		case 2:
			alert ( 'Ваше число 2');
			break;
		case 3:
			alert ( 'Ваше число 3');
			break;
		case 4:
			alert ( 'Ваше число 4');
			break;
		case 5:
			alert ( 'Ваше число 5');
			break;
		case 6:
			alert ( 'Ваше число 6');
			break;
		case 7:
			alert ( 'Ваше число 7');
			break;
		case 8:
			alert ( 'Ваше число 8');
			break;
		case 9:
			alert ( 'Ваше число 9');
			break;
		case 10:
			alert ( 'Ваше число 10');
			break;
		case 11:
			alert ( 'Ваше число 11');
			break;
		case 12:
			alert ( 'Ваше число 12');
			break;
		case 13:
			alert ( 'Ваше число 13');
			break;
		case 14:
			alert ( 'Ваше число 14');
			break;
		case 15:
			alert ( 'Ваше число 15');
			break;	
		}
*/

/*
    var a = 2;
    var b = 3;

	function plus(a, b) {
    return a + b;
	}
    
	function minus(a, b) {
    return a - b;
	}

    function div (a, b) {
    return a / b;
    }

    function mult (a, b) {
	return a + b;
	}
*/

/*
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return arg1 + arg2;
            break;
        case 'вычитание':
            return arg1 - arg2;
            break;
        case 'деление':
            return arg1 / arg2;
            break;
        case 'умножение':
            return arg1 * arg2;
            break;
    }
}
*/
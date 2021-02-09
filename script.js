// 1 задание
        var arr = [];
        var end = 1;
        while (end < 100){
            end++;
            arr.push(end);
        }
//      Удаляем все четные цифры
        var a = 2;
        var b = 2;
        while (a <= 100){
            a += b;
                arr.splice(arr.indexOf(a), 1);
        }
//      Удаляет все цифры которые деляться на нечетные до 10
        a = 4;
        b = 3;
        while (a < 100){
            if (a % b ===0 && arr.indexOf(a) !== -1){
                arr.splice(arr.indexOf(a), 1);
            }else {
                a++;
            }
        }

        a = 6;
        b = 5;
        while (a < 100) {
            if (a % b === 0 && arr.indexOf(a) !== -1) {
                arr.splice(arr.indexOf(a), 1);
            } else {
                a++;
            }
        }

        a = 8;
        b = 7;
        while (a < 100) {
            if (a % b === 0 && arr.indexOf(a) !== -1) {
                arr.splice(arr.indexOf(a), 1);
            } else {
                a++;
            }
        }

        console.log(arr);

// 2-3 задание
var basketPrice = ['tv', 'sofa', 'table'];
var price = 0;
function countBasketPrice(arr){
    for(var i = 0; i <= arr.length; i++){
        if(arr[i] == 'tv'){
            price += 900;
        } else if(arr[i] == 'sofa'){
            price += 500;
        } else if(arr[i] == 'table'){
            price += 1500;
        } else if(arr[i] == 'chair'){
            price += 400;
        } else if(arr[i] == 'cup'){
            price += 100;
        }
    }
    console.log(price);
}
countBasketPrice(basketPrice);






// 4 задание
for(var i = 0; i <= 9; console.log(i), i++){}
// 5 задание
for(var i = 1, word = "x"; i <= 20; console.log(word), word += "x", i++){}
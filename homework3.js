console.log('Задание № 1');

function isPrime(num) {
    if (num === 1) {
        return false;
    }
    var i = 2;
    while (i < num) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}

var i = 0;
while (i <= 100) {
    if (isPrime(i)) {
        console.log(i);
    }
    i++;
}



console.log('Задание № 2-3');

var cart = [
    ['Футболка', 'L', 2500, 2],
    ['Брюки', 42, 7500, 2],
    ['Носки', 42, 500, 7]
];

function countBasKetPrice(cart) {
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
        sum += cart[i][2] * cart[i][3];
    }
    return sum;
}

var total = countBasKetPrice(cart);
console.log(total);

console.log('Задание № 4');

for (var i = 0; i < 9; console.log(++i)) {
}
console.log('Задание № 5');

var str = 'x';
for (var i = 0; i < 20; i++) {
    console.log(str);
    str +='x';
}

for (var i = ' '; i.length <= 20; console.log(i+='x')) {

}

for (var i = 0; i <= 20; i++) {
    console.log('x'.repeat(i));
}
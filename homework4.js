console.log('Задание №1');

function numToObj(num) {
    num = +prompt('Введите число от 0 до 999');
    //num = num + '';
    if (isNaN(num)) {
        console.log('Введите число');
        return num;
    } else if (num.length > 3) {
        console.log('Слишком большое число');
        return {};
    }
    num = num + '';
    var titlesName = ['digits', 'dozens', 'hundreds'];
    var buffer = {};
    for (var i = num.length - 1; i >= 0; i--) {
        //var titlesIndex = (num.length - 1) - i;
        //var titles =titlesName [titlesIndex];
        //buffer[titles] = num[i];
        buffer[titlesName[(num.length - 1) - i]] = num[i];

    }
    return buffer;
}


var test = numToObj();
console.log(test);

console.log('Задание №2');

function total() {
    return this.price * this.quantity;
}

var cart = [
    {
        name: 'Футболка',
        price: 1500,
        quantity: 5,
        total: total
    },
    {
        name: 'Джинсы',
        price: 5500,
        quantity: 2,
        total: total
    },
    {
        name: 'Шорты',
        price: 3500,
        quantity: 1,
        total: total
    }

];

function countBasKetPrice(cart) {
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
        //sum += cart[i].price * cart[i].quantity;
        sum += cart[i].total()
    }
    return sum;
}

var test = countBasKetPrice(cart);
console.log(test);
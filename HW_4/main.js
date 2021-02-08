var resNumber;
do {
  resNumber = +prompt("Введите число от 0 до 999 ", 0);
}
while (!(resNumber >= 0));

//1-й вариант. Нахожу его плохим, потому что я возвращаю три объекта, в зависимости от ситуации, но нем не менее на ретурн я пишу три разных объекта
function conversion(item) {
  if (item > 999) {
    console.log("Большое число");
    return result = {
      // hundreds: '',
      // tens: '',
      // units: ''
    }
  }
  else if ((item / 100) >= 1) {
    return result = {
      hundreds: String(item).split('')[0],
      tens: String(item).split('')[1],
      units: String(item).split('')[2]
    }
  }
  else if ((item / 10) >= 1) {
    return result = {
      tens: String(item).split('')[0],
      units: String(item).split('')[1]
    }
  }
  else {
    return result = {
      units: String(item).split('')[0]
    }
  }
}

// conversion(resNumber);
// console.log(result);

//2-й варинат, тут возвращаем один объект, но если цифр меньше чем три, то пустые ячейки объекта принимают undefined
function conversion2(item) {
  if (item > 999) {
    console.log("Большое число");
    return result = {}
  }
  else {
    array = String(item).split('').reverse();
    return result = {
      hundreds: array[2],
      tens: array[1],
      units: array[0]
    }
  }
}
// conversion2(resNumber);
// console.log(result);

//3-й Вариант решения. Здесь я сделал шаблон объекта и принял число в функию, функция вызывает др функцию, которая разделяет число в массив и возвращает массив, а потом первая функция расставляет значения с массива по местам из шаблона объекта. мне кажется, это самый верный вариант, дайте , пожалуйста обратную свзять по этому варианту. 

function Mine(hundreds = "", tens = "", units = "") {
  this.units = units;
  this.tens = tens;
  this.hundreds = hundreds;
}

function conver(arg) {
  if (arg <= 999) {
    slit(arg);
    return MyObject = new Mine(arr[2], arr[1], arr[0]);
  }
  else {
    console.log("Число вышло за диапазон");
    return MyObject = new Mine();
  }
}

function slit(arg) {
  return arr = String(arg).split('').reverse();;
};

console.log(conver(resNumber));

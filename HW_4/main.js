var resNumber;
do {
  resNumber = +prompt("Введите число от 0 до 999 ", 0);
}
while (!(resNumber >= 0));

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

conversion(resNumber);
console.log(result);


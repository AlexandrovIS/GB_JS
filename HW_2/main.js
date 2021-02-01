/*
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 c = 1+1, поэтому 2, потому что + поставлен до а
d = b++; alert(d); // 1 - тут наоборот, сначала присвоили d значение b, затем b увеличили на 1;
c = (2+ ++a); alert(c);      // 5 - (2+ увеличенное на 1 значение a, которое до этого уже увеличили на 1, поэтому тут а =2, +1, затем +2) итого 5
d = (2+ b++); alert(d);      // 4 почти тоже самое, b которое уже равно двум после предыдущих преобразований , складываем с 2, получаем 4, а b после этой операции равно 3-м
alert(a);                    // 3 а изначально равно 1, в процессе мы дважды его увеличивали на 1
alert(b);                    // 3 b изначально равно 1, мы дважды его увеличивали на 1

var a = 2;
var x = 1 + (a *= 2); 5  а умножаем на 2, получаем 4, прибавляем 1
*/

function twoNumbers(a, b) {
  if (a >= 0 && b >= 0) {
    console.log(a - b);
  }
  else if (a < 0 && b < 0) {
    console.log(a * b);
  }
  else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    console.log(a + b);
  }
}
twoNumbers(10, -2);

var a = 15;
switch (a) {
  case 0: console.log("0");
  case 1: console.log("1");
  case 2: console.log("2");
  case 3: console.log("3");
  case 4: console.log("4");
  case 5: console.log("5");
  case 6: console.log("6");
  case 7: console.log("7");
  case 8: console.log("8");
  case 9: console.log("9");
  case 10: console.log("10");
  case 11: console.log("11");
  case 12: console.log("12");
  case 13: console.log("13");
  case 14: console.log("14");
  case 15: console.log("15");
}
function comparison(a) {
  if (a == 15) {
    document.write(a);
    return
  } document.write(a++ + "<br>");
  comparison(a);
}
comparison(5);

function summ(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  if (!b == 0) {
    return a / b;
  } return String = 'на ноль делить нельзя';
}
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "+": return summ(arg1, arg2);

    case "-": return sub(arg1, arg2);

    case "*": return multiplication(arg1, arg2);

    case "/": return division(arg1, arg2);

    default: return String = "неверно задан знак операции";
  }
}
console.log(mathOperation(10, 0, "/"));

console.log(division(10, 0));


function calculation() {

  var Tc = prompt("Введите значение температуры по Цельсию");
  if (isNaN(Tc)) {
    alert("Необходимо вводить численное значение");
  }
  else {
    var Tf = (9 / 5) * Tc + 32;
    alert("Значение температуры по Фаренгейту " + Tf + " градусов");
  }
}
var name;
var admin;
name = 'Василий';
admin = name;
console.log(admin);


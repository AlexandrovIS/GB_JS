//1
Point:
for (let i = 2; i <= 100; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue Point;
  }
  document.write(i + " ");
}

//3
var goods = [
  {
    title: "name_1",
    price: 100,
    quantity: 2
  },
  {
    title: "name_2",
    price: 200,
    quantity: 4
  },
  {
    title: "name_3",
    price: 300,
    quantity: 4
  }
]
function countBasketPrice() {
  var summ = 0;
  goods.forEach(inner => {
    summ += inner.price * inner.quantity;
  });
  return summ;
}
console.log(countBasketPrice());

//4
for (let i = 0; i < 10; console.log(i++));

//5
var x = "x", i = 0;
for (; i <= 20; i++) {
  console.log(x + "\n");
  x += "x";
}

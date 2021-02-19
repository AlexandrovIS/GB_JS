//массив для хранения всех товаров
var goodsArray = [];

//шаблон для создания товаров
function Product(id, name, picture, descriptions, quantity, cost) {
  if (!new.target) {
    return new Product(id, name, picture, descriptions, quantity, cost);
  }
  this.id = id,
    this.name = name,
    this.picture = picture,
    this.descriptions = descriptions,
    this.quantity = quantity,
    this.cost = cost
}

//функция, которая формирует вид карточки товара на сайт и добавляет на сайт
function CreateProduct({ id, name, picture, descriptions, quantity, cost }) {
  productbox = document.querySelector('.product_box'),
    div = document.createElement('div'),
    div.setAttribute("id", id),
    div.classList.add('cart'),
    h3 = document.createElement('h3'),
    h3.innerHTML = name,
    div.append(h3),
    img = document.createElement('img'),
    img.setAttribute("src", picture),
    img.setAttribute("alt", descriptions),
    div.append(img),
    p = document.createElement('p'),
    p.innerHTML = descriptions,
    div.append(p),
    p = document.createElement('p'),
    p.classList.add("quantity"),
    p.innerHTML = quantity,
    div.append(p),
    h2 = document.createElement('h2'),
    h2.innerHTML = cost,
    div.append(h2),
    btn = document.createElement('button'),
    btn.innerHTML = "Купить",
    btn.setAttribute("id", id),
    div.append(btn),
    productbox.append(div)
}

//функция в которую отправляем массив товаров и прогоняем каждый товар черз функцию, которая создает карточки на каждый товар и пушит их на сайт
function createToWeb(array) {
  array.forEach((items) => CreateProduct(items))
}

//создаем всячие товары разные товары по шаблону "Продукт" сразу в массиве
goodsArray = [
  car1 = Product("01", "bmw", "IMG/IMG_02_s.jpg", "great cars red", 10, 1300),
  car2 = Product("02", "audi", "IMG/IMG_02_s.jpg", "so so cars yellow", 20, 1200),
  car3 = Product("03", "mercedes", "IMG/IMG_02_s.jpg", "black", 10, 1500),
  car4 = new Product("04", "Name", "IMG/IMG_02_s.jpg", "desc", 10, 2000),
]
//создаем для примера еще один товар вне массива
var car5 = new Product("05", "Name2", "IMG/IMG_02_s.jpg", "desc2", 11, 3000)

//пушим в массив
goodsArray.push(car5)

//вызываем функцию , которая массив с товаром прогонит через функцию создания карточек на сайте. собственно тут все запускаем
createToWeb(goodsArray);

//собираем все кнопки с карточек товаров, слушаем какую кликнули.... 
var summ = 0;
document.querySelectorAll('.product_box button').forEach((item) =>
  item.addEventListener('click', function (event) {
    const id = event.target.id;
    summ += +(document.getElementById(id).querySelector('h2').innerHTML);
    document.querySelector(".bin p").innerHTML = summ;
    document.getElementById(id).querySelector('.quantity').innerHTML = ((+document.getElementById(id).querySelector('.quantity').innerHTML) - 1)
  })
);
//в принципе дальше надо делать массив "корзину". на каждый клик пушить в корзину карточку товара, циклом проходиться по массиву и собирать целы каждой карточки и выводить в поле на стр. я сделал вывод суммы выбраных товаров на страницу, но не красивым способом. В этом задании как-то сильно сконцентрировалы на создании функции, которая будет сама добавлять товар на сайт. И я не делал проверку на то, чтобы товара не могло быть <0. Но зато у меня получилися "живые" экземпляры объекта "Продукт"


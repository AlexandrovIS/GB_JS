//1-й вариант.
/* 
document.querySelectorAll('.small_img_item').forEach((item) =>
  item.addEventListener('click', function (e) {
    const id = e.target.getAttribute('data-item');

    document.querySelectorAll('.small_img_item').forEach((child) =>
      child.classList.remove('small_img_item__active')); //убираем со всех остальных элементов класс active
    item.classList.add('small_img_item__active'); //добавляем на активный элемент класс active
    document.querySelectorAll('.big_img_item').forEach((child) =>
      child.classList.remove('big_img_item__active'));//убрать активность со всех картинок

    document.getElementById(id).classList.add('big_img_item__active');//навесить activ на соответствующую картинку.
  })

);
document.querySelector('.small_img_item').click();//по умолчанию выбрана первая картинка
document.querySelector('.big_img_item').classList.add('big_img_item__active');
//этот код работает, но дает ошибку из-за того, что я кликаю по умолчанию в первый блок. в командной строке из-за этого висит ошибка. и еще ошибка из-за того, что я с руки большой фотографии даю класс актив! как избавиться не знаю!
*/

//2 вариант, все тоже самое, толька про тоггал ссылки, а не от ремувил 

// document.querySelectorAll('.small_img img').forEach((item) =>
//   item.addEventListener('click', function (event) {
//     const id = event.target.getAttribute('data-item');

//     document.querySelectorAll('.small_img_item__active').forEach((child) => child.classList.toggle('small_img_item__active'));

//     document.querySelectorAll('.big_img_item__active').forEach((child) =>
//       child.classList.toggle('big_img_item__active'));

//     item.classList.add('small_img_item__active');

//     document.getElementById(id).classList.add('big_img_item__active');

//   })
// );
// document.querySelector('.small_img img').classList.add('small_img_item__active')
// document.querySelector('.big_img div').classList.add('big_img_item__active');


// document.querySelectorAll('.my_button').forEach((item) =>
//   item.addEventListener('click', function (event) {


//     // const button = event.target.getAttribute('data-button');
//     // if (button == "prev") {}
//     // else if (button == "next") {}
//     // console.log(document.querySelector('.big_img_item__active').style.display = "none");
//   })
// );
var indexSlide;
document.querySelectorAll('.my_button').forEach((item) =>
  item.addEventListener('click', function (event) {
    const button = event.target.getAttribute('data-button');
    if (button == "prev") {
      if (Number(indexSlide) - 1 < 1) {
        showSlide(document.querySelectorAll('.big_img img').length - 1)
      } else showSlide(Number(indexSlide) - 1)
    }
    else if (button == "next") {
      if (Number(indexSlide) - 1 >= document.querySelectorAll('.big_img img').length - 1) {
        showSlide(1)
      }
      else showSlide(Number(indexSlide) + 1)
    }

  }));

function showSlide(index) {
  sliders = document.querySelectorAll('.big_img img')
  sliders.forEach((child) => child.style.display = "none")

  sliders[index - 1].style.display = "block"
  indexSlide = sliders[index - 1].getAttribute('id')
}

// 3-й вариант с обращением к id самих фото, без активного класса
document.querySelectorAll('.small_img img').forEach((item) =>
  item.addEventListener('click', function (event) {
    const id = event.target.getAttribute('data-item');
    document.querySelectorAll('.small_img_item__active').forEach((child) => child.classList.toggle('small_img_item__active'));
    item.classList.add('small_img_item__active');
    showSlide(id);
  })
);

document.querySelector('.small_img img').click();

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
document.querySelectorAll('.small_img_item').forEach((item) =>
  item.addEventListener('click', function (event) {
    const id = event.target.getAttribute('data-item');
    console.log(id);
    document.querySelectorAll('.small_img_item__active').forEach((child) => child.classList.toggle('small_img_item__active'));

    document.querySelectorAll('.big_img_item__active').forEach((child) =>
      child.classList.toggle('big_img_item__active'));

    item.classList.add('small_img_item__active');

    document.getElementById(id).classList.add('big_img_item__active');

  })
);
document.querySelector('.small_img_item').classList.add('small_img_item__active')//если я с руки прописываю класс актив по умолчанию для первого же попавшегося селектора, то код не дает ошибку. в первом случае с автокликом падает ошибка.
document.querySelector('.big_img_item').classList.add('big_img_item__active');

//с  кнопками пока что в ступоре=(( 

// document.querySelectorAll('.my_button').forEach((item) =>
//   item.addEventListener('click', function (event) {
//     const button = event.target.getAttribute('data-button');
//     if (button == "prev") {
//       let v = document.querySelectorAll('.big_img_item');
//       console.log(v);
//       v.forEach(item => {
//         item.classList.remove('big_img_item__active');

//       });
//       // let v = (document.querySelector('.big_img_item__active').id);
//       // console.log(v);
//     }
//     else if (button == "next") {
//       document.querySelector('.big_img_item__active').classList.toggle('new2');
//     }



//   })
// );
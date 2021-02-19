var table = document.createElement("table");
var tr, td, i, j;
var cod = cod2 = 65;

for (i = 0; i < 10; i++) {
  tr = document.createElement("tr");
  table.append(tr);

  for (j = 0; j < 10; j++) {
    td = document.createElement("td");

    //для нумерации по бокам 
    if ((j == 0 || j == 9) && (i == 0 || i == 9)) td.innerHTML = " ";//пустые клетки по краям поля
    else if (j == 0) td.innerHTML = Math.abs(i - 9); //нумерация первой колонки
    else if (j == 9) {
      td.style.transform = "rotate(180deg)";
      td.innerHTML = Math.abs(i - 9); //нумерация последней колонки и переворот 
    }

    //для нумерации строк сверху и снизу
    if ((i == 0) && (j > 0 && j < 9)) {
      td.innerHTML = "&#" + cod;
      td.style.transform = "rotate(180deg)";
      cod++;
    }
    if ((i == 9) && (j > 0 && j < 9)) {
      td.innerHTML = "&#" + cod2;
      cod2++;
    }

    //красим доску 
    if ((j > 0 && j < 9) && (i > 0 && i < 9)) { //цикл по доске без полей
      td.style.fontSize = "50px";//размер фигурок

      if (!((i + j) % 2 == 0)) {//красим четные черным
        td.style.background = "rgba(0,0,0,0.7)";
      }
      else td.style.background = "rgba(0,0,0,0.1)";//красим нечетные почти белым
      //
      var possinionOnBoard = String(i) + String(j);//переводим i j в строку, чтобы получать номер клетки из двух цифр, цифры не могут повториться в таком случае

      //делаю цикл по массиву с объектами фигурок. Ищу по всему массиву и ищу, где моя сделанная строка совпадет с позицией из массива, если совпадает, то на место этой клетки пушу фигурку из массива, код фигурки
      figures.forEach(element => {
        if (possinionOnBoard == element.position) { td.innerHTML = element.title }
      });
    }
    tr.append(td);
    td.style.width = "50px"
    td.style.height = "50px"
    td.style.textAlign = "center"
  }
}

document.getElementsByTagName("div")[0].append(table);

/*
* Напишите функцию truncate, которая принимает строку и максимальную длину.

* Если длина строки превышает указанное количество символов, функция должна обрезать строку до этой длины и добавлять в конец многоточие (...).
* В противном случае функция должна возвращать исходную строку.

* Пример работы функции:
* truncate("Вот, что мне действительно нравится в этом", 20) // Ожидаемый результат: "Вот, что мне действи..."
* truncate("Короткая строка", 20) // Ожидаемый результат: "Короткая строка"
*/

const stroke = "Здесь живут самые счастливые люди";
const lengthCateStroke = 15;
const plusEnd = "..."

function truncate(str, maxLength) {
  // your code
  let newStroke = "";
  if (maxLength < str.length) {
    newStroke = str.slice(0, maxLength) + plusEnd;
  } else {
    newStroke = str;
  }
  return newStroke;
}

console.log(truncate(stroke, lengthCateStroke))
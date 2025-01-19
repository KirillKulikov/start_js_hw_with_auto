/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

const str = "hello, kirill kulikov";

function capitalizeWords(strCapitalize) {
  let newStr = strCapitalize[0].toUpperCase();
  // for (let index = 0; index < strCapitalize.length; index++) {
  //   newStr = newStr + strCapitalize[index].toUpperCase();
  // }
  for (let index = 1; index < strCapitalize.length; index++) {
    if (strCapitalize[index - 1] === " ") {
      newStr = newStr + strCapitalize[index].toUpperCase()
    } else {
      newStr += strCapitalize[index];
    }
  }

  return newStr;
}

console.log(capitalizeWords(str));

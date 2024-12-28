/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

// const userStr = "kirill";

function doubleEachCharacter(str) {
    let userArray = []
    for (let index = 0; index < str.length; index++) {
        userArray.push(userStr[index] + userStr[index])
    }

    return userArray.join('');
}


// console.log(doubleEachCharacter(userStr));
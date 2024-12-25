/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

// Массив для примера
// let numberArray = [25, 7, 15, 29, 12, 8, 14, 10];
// let userElement = 12;

function includesElement(array, element) {
    // console.log(element)
    for (let i = 0; i < array.length; i++) {
        if (element === array[i]) {
            return true
        }
    }
    return false
}


// console.log(includesElement(numberArray, userElement))
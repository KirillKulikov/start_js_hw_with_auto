/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

// const scoreArray = [82, 75, 91, 82, 93, 75, 99]

function findUniqueElements(array) {
    let resultArray = []

    for (let index = 0; index < array.length; index++) {
        if(resultArray.indexOf(array[index]) === -1) {
            resultArray.push(array[index])
        }
    }

    return resultArray;
}

// let totalScore = findUniqueElements(scoreArray);
// console.log(totalScore);

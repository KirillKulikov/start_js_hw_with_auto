// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

let heightNumber
function findLargest(num1, num2, num3) {
    
    if (num1 > num2 && num1 > num3) {
        heightNumber = num1;
    } else if (num2 > num1 && num2 > num3) {
        heightNumber = num2;
    } else {
        heightNumber = num3;
    }
    return heightNumber;
}

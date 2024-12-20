// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

let heightNumber
function findLargest(num1, num2, num3) {
    
    if (num1 > num2 && num1 > num3) {
        heightNumber = "Heigest number: " + num1;
    } else if (num2 > num1 && num2 > num3) {
        heightNumber = "Heigest number: " + num2;
    } else {
        heightNumber = "Heigest number: " + num3;
    }
    return heightNumber;
}

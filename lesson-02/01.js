/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = true
const isVerifiedUser = true
const hasSpecialPermission = true
const hasTemporaryPass = true

let isAccess

// your code
if (isAdmin || isVerifiedUser) {
    if (hasSpecialPermission || hasTemporaryPass) {
        alert("Вы вошли в личный кабинет");
        isAccess = true;
    } else {
        alert("У Вас нет разрешения! Запросите пропуск!");
        isAccess = false;
    }
} else {
    alert("Доступ закрыт! Запросите доступ!");
    isAccess = false;
}
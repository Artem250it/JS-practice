// Number

// const num = 42; //integer
// const float = 42.42; // float
// const pow = 10e3; // возведение в степень

// console.log("MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER); // max integer  9007199254740991

// console.log("Math.pow 53", Math.pow(2, 53) - 1); //Maximum integer          9007199254740991

// console.log("MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER); //min integer   -9007199254740991

// console.log("MAX_VALUE", Number.MAX_VALUE); //максимально допустимое число    1.7976931348623157e+308

// console.log("MIN_VALUE", Number.MIN_VALUE); //минимальное допустимое число    5e-324

// console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY); // безконечность

// console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY); //  безконечность

// console.log("2 / 0", 2 / 0); // деление на 0 выводит  безконечность

// console.log(Number.NaN); // Not A namber
// console.log(typeof NaN);
// const werd = 2 / undefined;
// console.log(isNaN(werd));
// console.log(Number.isNaN(43));
// console.log("конечно ли 42", Number.isFinite(42));
// console.log("конечно ли Infinity", Number.isFinite(Infinity));

// const stringInt = "40";
// const stringFloat = "40.42";
// console.log(Number.parseInt(stringInt) + 2);
// console.log(Number(stringInt) + 2);
// console.log(+stringInt + 2);

// console.log(Number.parseFloat(stringFloat) + 2);
// console.log(+stringFloat + 2);

// console.log(0.4 + 0.2); //0.6000000000000001
// console.log(+(0.4 + 0.2).toFixed(1)); //0.6
// console.log(parseFloat((0.4 + 0.2).toFixed(1))); // 0.6

//BigInt----- Возможность работать с числами больше чем integer
// console.log(9007199254740991n - 90071999999999n);
// console.log(-9007199254740991n);
//console.log(-9007199254740991.123454n)//error------нет дробной чати!
//console.log(10n - 4)//error
// console.log(parseInt(10)-4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n) // без дробной части

// Math

// console.log(Math.E); //expanenta// 2.718281828459045
// console.log(Math.PI); //number Pi// 3.141592653589793

// console.log(Math.sqrt(25)); // квадратный корень//5
// console.log(Math.pow(5, 2)); //возводит в степень//125
// console.log(Math.abs(-42))// отсекает негативную часть //42
// console.log(Math.max(42,12,23,11,422)) //422
// console.log(Math.min(42,12,23,11,422)) //11
// console.log(Math.floor(4.9))// 4 --- округление вниз. Округляет аргумент до ближайшего меньшего целого.
// console.log(Math.ceil(4.9))// 5--- округление вверх. Округляет аргумент до ближайшего большего целого.
// console.log(Math.round(4.9))// 5 ---возвращает число, округлённое к ближайшему целому.
// console.log(Math.trunc(4.9))// 4 ----возвращает целую часть числа путём удаления всех дробных знаков.
// console.log(Math.random())

//Example
// function getRandomBetween(min, max) {
//   return Math.floor(Math.random() * (max, min + 1) + min);
// }
// console.log(getRandomBetween(10, 42));

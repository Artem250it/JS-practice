// const firstName = "Artiom";
// const age = 34;
// const isProgrammer = true;

// Мутирование

// console.log('Имя человека:' + firstName + ',  а возраст человека ' + age);
// alert('Имя человека:' + firstName + ',  а возраст человека ' + age);

// const lastName = prompt("Введите фамилию");
// alert(firstName + " " + lastName);

// Операторы-----------------------------------------------------------------

// let currentYear = 2023
// const birthYear = 1988
// const age = currentYear + birthYear

// const a = 10
// const b = 5
// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c+=a
// c-=a
// c*=a
// c/=a
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear)
// console.log(currentYear)
// console.log(c)

// Типы данных-------------------------------------------------------------

// const isProgrammer = true
// const nam = 'Artem'
// const age = 26
// let x
//  console.log(typeof isProgrammer )
//  console.log(typeof nam)
//  console.log(typeof age)
//  console.log(typeof x)
//  console.log(typeof null)

// Приоретет операторов---------------------------------------------------

// const fullAge = 34
// onst birthYear = 1988
// const currentYear = 2023

// > < >= <=
// const isFullAge = (currentYear - birthYear) >= fullAge
// console.log(isFullAge)

// Усовные операторы-------------------------------------------------------

// const coursesStatus ='ready'

// if (coursesStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить')
// }
// else if (coursesStatus === 'panding'){
//   console.log('Курс пока находиться в процессе разработки')
// }
// else {
//   console.log('Курс не получился')
// }

// const isReady = true;
// if (isReady === true) {
//   console.log('Все готово!')
// }
// else {
//   console.log('Все не готово!')
// }

// Тернарные выражения------------------------------------------------------------

// isReady ? console.log('Все готово!') : console.log('Все не готово!')

// Функции-------------------------------------------------------------------------

// function calculatedAge(year) {
//   return 2023 - year;
// }
//  console.log( calculatedAge(1988))
//  console.log( calculatedAge(1988))
//  console.log( calculatedAge(1981))

// function logInfoAbout(name, year) {
//   const age = calculatedAge(year);

//   if (age > 0){

//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)

//   } else {
//     console.log('вообще-то это уже будущее')
//   }
// }

// logInfoAbout('Artem', 1988);
// logInfoAbout('Elena', 1989);
// logInfoAbout('Alexsander', 2019);

// Массивы-------------------------------------------------------------------

//  const cars = ['Мазда','Мерседес','Форд']
// const cars = new Array('Мазда','Мерседес','Форд')
// console.log (cars.length)

// console.log (cars[0])
// console.log (cars[1])
// console.log (cars[2])
// cars [cars.length] = 'Мазда'
// cars [0] = 'Porsche'
//  console.log(cars)

// Циклы----------------------------------------------------------------------

//  const cars = ['Мазда','Мерседес','Форд','Porsche']

//  for (let i = 0; i < cars.length; i++ ){
//   const car =cars[i]
//   console.log(car)
//  }

// for (let car of cars){
//   console.log(car)
// }

// Обьекты (групировка)-----------------------------------------------------------

// const person = {
//   firstName: "Artem",
//   lastName: "Kotlov",
//   year: 1988,
//   language: ["Ru", "En"],
//   hasWife: true,
//   greet: function () {
//     console.log("greet");
//   },
// };
// console.log(person.firstName);
// console.log(person["lastName"]);
// const key = "year";

// person.hasWife = false;
// person.isProgrammer = true
// console.log(person);

// person.greet();

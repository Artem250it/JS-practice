//функции-------------------------------------------------------------------------
//функции-- являються обьектами!

//Function Declaration//отлтчие от  Function Expression ,можно вызвать функцию  по коду до того как она была создана
// function greet(name){                                                     // greet('Лена')
//   console.log('Привет -', name)                                          //function greet(name){
// }                                                                        //console.log('Привет -', name)
//Function Expression                                                    //}
// const greet2 = function greet2(name){
//   console.log('Привет 2 -', name)
// }

// greet('Лена')
// greet2('Лена')

// console.log(typeof greet)
// console.dir(greet)

// Анонимные функции----------------------------------------------------------------------------

// let counter = 0
// const  interval = setInterval(function(){             //setTimeout ---задает задержку
//   if (counter === 5){                                 //setInterval ---задает интервал
//     clearInterval(interval)
//   } else {
//     console.log(++counter)
//   }

// },1000 )

//Стрелочные функции---------------------------------------------------------------------------

//function greet(name){
// console.log('Привет -', name)

//}
// const arrow = (name) => {
//   console.log('Привет -', name)
// }
// const arrow2 = name => console.log('Привет -', name)
// arrow2('Artem')

// const pow2 = num => num  ** 2

// console.log(pow2())

//Параметры по умочанию------------------------------------------------

// const sum = (a = 5 , b = a * 2) => a + b;
// console.log(sum(41,2));
// console.log(sum());

// function sumAll(...all) {
//   let result = 0;
//   for (let num of all) {
//     result += num;
//   }
//   return result;
// }
// const res = sumAll(1, 2, 3, 4, 5);
// console.log(res)

// Замыканиния-------------------------------------------------------------------
// function createMember(name) {
//   return function(lastName){
//     console.log(name + lastName)
//   }
// }
// const logWithLastName = createMember('Artem')
// console.log(logWithLastName('Kotlov'))
// console.log(logWithLastName('Kyky'))

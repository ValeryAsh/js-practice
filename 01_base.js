// Конечно! Вот несколько задач, чтобы проверить ваши знания по основам JavaScript:

// Задача: Проверка четности
// Напишите функцию isEven(number), которая принимает число в качестве аргумента и возвращает true, если число четное, и false, если число нечетное.

const isEven = (number) => number % 2 == 0 ? true : false
console.log(isEven(11))

// Задача: Поиск наибольшего значения
// Напишите функцию findMax(numbers), которая принимает массив чисел в качестве аргумента и возвращает наибольшее значение из этого массива.
function findMax(numbers){
  numbers.sort( (a, b) => b - a)
  return numbers[0]
}
console.log(findMax([1,2,3,4,5,6]))

// Задача: Объединение массивов
// Напишите функцию concatArrays(arr1, arr2), которая принимает два массива в качестве аргументов и возвращает новый массив, содержащий все элементы обоих массивов.
function concatArrays(arr1, arr2){
  return arr1.concat(arr2)
}
console.log(concatArrays([1,2,3,4,5],[6,7,8,9]))
// Задача: Подсчет гласных
// Напишите функцию countVowels(string), которая принимает строку в качестве аргумента и возвращает количество гласных букв в этой строке.
//  Гласными считаются буквы "a", "e", "i", "o" и "u" (как в верхнем, так и в нижнем регистре).
function countVowels(string){
  let count = 0;
  string.toLowerCase().split("");
  for(let i = 0;string.length > i; i++){
    if(string[i] == "a"){
      count++
    }
    if(string[i] == "e"){
      count++
    }
    if(string[i] == "i"){
      count++
    }
    if(string[i] == "o"){
      count++
    }
    if(string[i] == "u"){
      count++
    }
  }
  return `строке ${string} ${count} гласных`
}
console.log(countVowels("Random Text Generator is a web "))

// Задача: Реверс строки
// Напишите функцию reverseString(string), которая принимает строку в качестве аргумента и возвращает новую строку, в которой символы идут в обратном порядке.
function reverseString(string){
  return string.split('').reverse().join('')
}
console.log(reverseString("Random Text Generator is a web "))

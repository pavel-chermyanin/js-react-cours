'use strict';

// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10)

//     function frame() {
//         if (pos === 300) {
//             clearInterval(id)
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation)

// function logger() {
//     if (i === 3) {
//         clearInterval(timer)
//     }
//     console.log('text');
//     i++;

// }

// let id = setTimeout(function log(){
//     console.log('ooops');
//     id = setTimeout(log, 500)
// }, 500)

// let x = 5;
// alert(++x)

// console.log([] + false - null + true);
// let y = 1
// let x = y = 2
// console.log(x);
// console.log(([] + 1 + 2));

//toString
// И запинается на лжи
//ИЛИ запинатеся на правде
//1
// console.log(typeof String(null));
// console.log(String(4));
//2
// console.log(typeof(5 + ''));
// const num = 5;
// console.log('https://vk.com/catalog/'+ num);

// const fontSize = 26 + 'px';

//toNumber

//1
// console.log(typeof(Number('4')));
// //2
// console.log(typeof(+('4')));
// //3
// console.log(typeof(parseInt("14px", 10)));

// let answer = +prompt('hello', '')


// to bollean

//1
// 0,false, '', null, undefined, NaN
// let switcher = null;
// if(switcher) {
//     console.log('working');
// }
// switcher = 1;
// if (switcher) {
//     console.log('working');
// }

//2
// console.log(typeof(Boolean('4')));

//3
// console.log(typeof(!!'4444'));


// const arr = [1, 2, 3];
// console.dir(arr.__proto__)
// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello() {
//         console.log('hello');
//     }
// };
// const john = Object.create(soldier)
// Object.setPrototypeOf(john, soldier)
// john.__proto__ = soldier;
// console.log(john.sayHello());


// const array = ['a', 'b'];
// const newArray = [...array];
// newArray[0] = 'ddddd';
// console.log(array);
// console.log(newArray);
// const oldArray = ['a', 'b', 'c'];
// const newArray = [...oldArray];
// newArray[1] = 'ewrewrewr'
// console.log(newArray);
// console.log(oldArray);
// function log (a,b,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 'fdfdf']
// log(...num)

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(a, b);
// const obj = {
//     a: 5,
//     b: 1
// // };
// function copy (mainObj) {
//     let objCopy = {};
//     for (const key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy
// }
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x:7,
//         y:4
//     }
// }
// const add = {
//     d: 17,
//     e: 20
// }
// const clone = Object.assign({}, add);
// clone.d = 1000;
// console.log(add);
// console.log(clone);
// const newNumbers = copy(numbers)
// newNumbers.a = 10
// newNumbers.c.x = 200;
// console.log(numbers);
// console.log(newNumbers);
// const copy = obj;
// copy.a = 10
// console.log(copy, obj);

// const arr = [7, 12, 3, 4, 25];
// console.log(arr.sort((a,b) => a-b));

// arr.forEach(function(item, index, array) {
//     console.log(`${index}: ${item} внутри массива ${array}`);
// })
// arr[20] = 0
// console.log(arr);
// arr.pop()
// arr.push(100)

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }
// for (const value of arr) {
//     console.log(value);
// }
// const str = prompt('', '');
// const products = str.split(', ')
// products.sort()
// console.log(products.join('*'))
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest() {
//         console.log('Test')
//     }
// }
// console.log(Object.keys(options).length);
// options.makeTest()

// const {border, bg} = options.colors;
// console.log(border, bg);

// for (const key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (const i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)

//     }
// }

// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback()
// }
// learnJS('JS', function () {
//     console.log('callback')
// })
// const str = 'test very hard';
// const arr = [1, 2, 3]
// const num = '12.2px'
// console.log(parseFloat(num))

// console.dir(Number)

// function calc( a, b) {
//     return a + b
// }
// console.log(calc(5, 4))
// function ret() {
//     let num = 60
//     return num
// }
// const anotherNum = ret()
// console.log(anotherNum)
// let num = 20
// function showFirstMessage(a) {
//     console.log('hello ' + a)
//     let num = 10
// }

// showFirstMessage('pavel')
// console.log(num)

// let num = 50;
// for (let i = 0; i < 10; i++) {
//     if (i === 6) {
//         continue
//     }
//     console.log(i)
    
// }
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while(num < 55)







const personalMovieDB = {
    count: 0,
    movies: {},
    acters: {},
    genres: [],
    privat: false,
    start() {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (numberOfFilms == '' || numberOfFilms === null || Number.isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        this.count = numberOfFilms
    },
    rememberMyFilms () {
        for (let i = 0; i < 2; i++) {
            let answerMovie;
            let answerRate;
            do {
                answerMovie = prompt('Один из последних просмотренных фильмов?', '');
                answerRate = +prompt('На сколько оцените его?', '');

            } while (answerMovie.length === 0 ||
            answerMovie.length > 50 ||
            answerMovie === null ||
                answerRate === null);
            this.movies[answerMovie] = answerRate;
        }
    },
    detectedPersonalLevel() {
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов")
        } else if (this.count >= 10 && this.count < 30) {
            alert("Вы классический зритель")
        } else if (this.count >= 30) {
            alert("Вы киноман")
        } else {
            alert("error!")
        }
    },
    
    showMyDB(hidden) {
        if (!hidden) {
            console.log(this)
        }
    },
    writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            let answerGenres;
            do {
                answerGenres = prompt(`Ваш любимый жанр номер ${i + 1}`, '')
            } while (answerGenres === '' || answerGenres === null);
            this.genres.push(answerGenres)
        }
        this.genres.forEach((item ,index) => {
            console.log(`Любимый жанр #${index + 1} - это ${item}`);
        })
    },
    toggleVisibleMyDB() {
        this.privat = !this.privat
    }
    
        
}
// personalMovieDB.writeYourGenres()




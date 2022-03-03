'use strict';


    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if(n < 1) {
    //         slideIndex = slides.length
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // })
    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // })


// reduce

// const arr = [4, 5, 1];
// const result = arr.reduce((accum, item) => accum + item);
// console.log(result);
// const arr = ['apple', 'pear', 'mango'];
// const result = arr.reduce((accum, item) => `${accum}, ${item}`, 3);
// console.log(result);
// const obj = {
//     pavel: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// }

// const newArr = Object.entries(obj)
//     .filter(item => item[1] === 'persone')
//     .map(item => item[0]);
// console.log(newArr);



// every/ some

// const some = [4, 9, 1];
// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));




// map

// const answers = ['paVel', 'ANNA', 'HeLLo'];

// const result = answers.map(item => item.toLowerCase());
// console.log(result);


//filter


// const names = ['pavel', 'igor', 'anna', 'bob'];

// const shortNames = names.filter(function(name) {
//     return name.length < 4;
// });
// console.log(shortNames);

// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     })
// };
// test(1000).then(() => console.log('1000 ms'))
// test(2000).then(() => console.log('2000 ms'))

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('all');
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('all');
// });







// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         }

//         resolve(product)
//     }, 2000);
// })

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then((data) => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data)
// }).catch(() => {
//     console.error('Произошла ошибка')
// }).finally(() => {
//     console.log('finally');
// });










// const inputRub = document.querySelector('#inputRub'),
//       inputUsd = document.querySelector('#inputUsd');

// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     // readystatechange   readyState=1
//     request.addEventListener('load', () => {
//         if (request.status === 200) {
//             console.log(request.response);
//             const data = JSON.parse(request.response);
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//         } else {
//             inputUsd.value = 'Что-то пошло не так';
//         }
//     })
//     // status
//     // statusText
//     // response
//     // readyState


// });      


// const person = {
//     name: 'Alex',
//     tel: '+7899999999',
//     parents: {
//         name: 'Olga'
//     }
// };

// const clone = JSON.parse(JSON.stringify(person));
// clone.parents.name = 'Ann';
// console.log(person);
// console.log(clone);


// const log = function(a, b, ...rest) {
//     console.log(a, b, rest);
// }

// log('basic', 'rest', 'operator', 'usage');

// function calcOrDouble(number, basis=2) {
//     console.log(number * basis);
// }
// calcOrDouble(4)

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// class ColoredRectangleWithText extends Rectangle{
//     constructor(height, width,text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст ${this.text}, цвет ${this.bgColor}`);
//     }
// }
// const div = new ColoredRectangleWithText(25, 25 , 'hello', 'red');
// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// console.log(square.calcArea());



// function showThis(a, b) {
// console.log(this);

//     function sum () {
// console.log(this);
//         return a + b
//     }
// console.log(sum());
// }

// showThis(4, 5)


// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
// console.log(this);

//         }
//         shout()
//     }
// }
// obj.sum()


// function User(name, id) {
//     this.name = name,
//     this.id = id,
//     this.human = true
// }
// let pavel = new User('pavel', 31);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'pavel'
// }

// sayName.call(user, 'che')
// sayName.apply(user, ['che'])

// function count(num) {
//     return this * num
// }

// const double = count.bind(2)
// console.log(double(3));

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'red'
//     console.log(this);
// })

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//         }
//         say()
//     }
// }
// obj.sayNumber();

// const double = (a) => a * 2;

//1) Обычная функция this = window, но если use strict - undefined

//2) Контекст у методов объекта - сам объект

//3) This в конструкторах и классах - это новый экземпляр объекта

//4) Ручная привязка this - call, apply, bind






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
    rememberMyFilms() {
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
        this.genres.forEach((item, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${item}`);
        })
    },
    toggleVisibleMyDB() {
        this.privat = !this.privat
    }


}
// personalMovieDB.writeYourGenres()




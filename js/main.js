'use strict';


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





let numberOfFilms; 
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms === null || Number.isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        console.log(numberOfFilms)
    }
}
// start()

const personalMovieDB = {
    count: numberOfFilms ,
    movies: {},
    acters: {},
    genres: [],
    privat: false    
}

function rememberMyFilms () {
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
        personalMovieDB.movies[answerMovie] = answerRate;
    }
}

// rememberMyFilms()


function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель")
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман")
    } else {
        alert("error!")
    }
}

// detectedPersonalLevel()

function showMyDB (hidden) {
        if(!hidden) {
            return personalMovieDB
        }
}
showMyDB(personalMovieDB.privat)

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let answerGenres = prompt(`Ваш любимый жанр номер ${i+ 1}`, '')
        personalMovieDB.genres.push(answerGenres)
    }
}
writeYourGenres()
console.log(personalMovieDB.genres)
let numberOfFilms  = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms ,
    movies: {},
    acters: {},
    genres: [],
    privat: false
}


let witchMovie = prompt('Один из последних просмотренных фильмов?', '');
let witchRate = +prompt('На сколько оцените его?', '');
let witchMovie2 = prompt('Один из последних просмотренных фильмов?', '');
let witchRate2 = +prompt('На сколько оцените его?', '');
personalMovieDB.movies[witchMovie] = witchRate;
personalMovieDB.movies[witchMovie2] = witchRate2;
console.log(personalMovieDB)
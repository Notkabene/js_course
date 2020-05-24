const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat: false
};

const lastFilm = prompt('Один из последних просмотреннных фильмов?', '');
const rateFilm = prompt('На сколько оцените его?', '');
const lastFilmTwo = prompt('Один из последних просмотреннных фильмов?', '');
const rateFilmTwo = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = rateFilm;
personalMovieDB.movies[lastFilmTwo] = rateFilmTwo;

console.log(personalMovieDB);
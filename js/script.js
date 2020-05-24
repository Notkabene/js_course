const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies:{
    lastFilm: rateFilm
  },
  actors:{},
  genres:[],
  privat: true
};

const lastFilm = prompt('Один из последних просмотреннных фильмов?', '');
const rateFilm = +prompt('На сколько оцените его?', '');
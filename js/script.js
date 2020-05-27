'use strict';

const personalMovieDB = {
  count: 0,
  movies:{},
  actors:{},
  genres:[],
  privat: false,
  start: function() {
    personalMovieDB.count = prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (personalMovieDB.coun == '' || personalMovieDB.coun == null || isNaN(personalMovieDB.coun)) {
      personalMovieDB.coun = prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const lastFilm = prompt('Один из последних просмотреннных фильмов?', ''),
        rateFilm = prompt('На сколько оцените его?', '');

      if (lastFilm!=null&& rateFilm!=null && lastFilm!='' && rateFilm!='' && lastFilm.length<50 && rateFilm.length<50) {
        personalMovieDB.movies[lastFilm] = rateFilm;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
      alert('Вы киноман');
    } else {
      alert('Произошла ошибка');
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i < 2; i++) {

      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      // if (genre === null || genre === '') {
      //   console.log('error');
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = genre;
      // }

      let genre = prompt(`Ведите Ваши любимые жанры через запятую`).toLowerCase();
      if (genre === null || genre === '') {
        console.log('error');
        i--;
      } else {
        personalMovieDB.genres = genre.split(', ');
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }


};
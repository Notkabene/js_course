const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat: false
};

for(let i = 0; i < 2; i++) {
  const lastFilm = prompt('Один из последних просмотреннных фильмов?', ''),
        rateFilm = prompt('На сколько оцените его?', '');

  if (lastFilm!=null && rateFilm!=null && lastFilm != '' && rateFilm != '' && lastFilm.length<50 &&rateFilm.length<50) {
    personalMovieDB.movies[lastFilm] = rateFilm;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

if (personalMovieDB.count < 10) {
  alert('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}



console.log(personalMovieDB);
let numberOfFilms;

function start() {
  numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat: false
};



function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотреннных фильмов?', ''),
      rateFilm = prompt('На сколько оцените его?', '');

    if (lastFilm != null && rateFilm != null && lastFilm != '' && rateFilm != '' && lastFilm.length < 50 && rateFilm.length < 50) {
      personalMovieDB.movies[lastFilm] = rateFilm;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel () {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();
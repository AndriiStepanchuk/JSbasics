'use strict'

let numberOfFilms;

function start() {
	numberOfFilms = prompt('How many films have you watched?', '');

	while (numberOfFilms == null || numberOfFilms== '' || isNaN(numberOfFilms)) {
		numberOfFilms = prompt('How many films have you watched?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movie: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('One of the lastest watched films?', '');
		const b = prompt('What a rating for it?', '');

		if (a != null && a != '' && b != null && b != '' && a.length < 50) {
			personalMovieDB.movie[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}

rememberMyFilms();
	
function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 50) {
		console.log('Вы киноман')
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i-1] = prompt(`Your favorite ganre under number ${i}`, '')
	}
}

writeYourGenres();

// console.log(personalMovieDB);
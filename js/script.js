const numberOfFilms = +prompt('How many films have you watched?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movie: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('One of the lastest watched films?', '');
const b = prompt('What a rating for it?', '');
const c = prompt('One of the lastest watched films?', '');
const d = prompt('What a rating for it?', '');

personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;

console.log(personalMovieDB);

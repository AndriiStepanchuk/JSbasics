// const numberOfFilms = +prompt('How many films have you watched?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movie: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// for (let i = 0; i < 2; i++) {
// 	const a = prompt('One of the lastest watched films?', '');
// 	const b = prompt('What a rating for it?', '');

// 	if (a != null && a != '' && b != null && b != '' && a.length < 50) {
// 		personalMovieDB.movie[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// }
	
// if (personalMovieDB.count < 10) {
// 	console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 	console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 50) {
// 	console.log('Вы киноман')
// } else {
// 	console.log('Произошла ошибка');
// }


// console.log(personalMovieDB);

// const lines = 5;
// let result = ' ';
// for (let i = 1; i <= lines; i++) {
// 	for (let j = 0; j < i; j++) {
// 		result += '**';
// 	}
// 	result += '\n';
// }
// console.log(result);

// // 
// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert (amount, curr) {
// 	console.log(curr * amount);
// 	return curr * amount;
// }

// function promotion(result) {
// 	console.log(result * discount)
// }

// promotion(convert(500, usdCurr));

// convert(500, usdCurr);
// // 
function getMathResult(x, times) {
    if (times <= 0 || typeof(times) === 'string'){
        result = +x;        
    } else {
		let result = '---';
		for (let i = 1; i <= times; i++){
			result2 = x * i
		}
	}
	console.log(result)
}
getMathResult(11, 'hfh')
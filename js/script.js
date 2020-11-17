let numberOfFilms;

function start() {
	numberOfFilms = +prompt("How many movies have you watched already?", "");
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("How many movies have you watched already?", "");
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};



function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("The last wathced movie?", ""),
			b = prompt("How good was it?", "");

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}
rememberMyFilms();



function detectPersonalLevel() {
	if (personalMovieDB.count == 0) {
		alert("You don't like movies?")
	} else if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
		alert('Not so many movies watched!')
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		alert('Not bad! You are classic movie watcher!')
	} else if (personalMovieDB.count > 30) {
		alert('You are big fan of movies!')
	} else {
		alert('Error!')
	}
}
detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt("What is your " + i + " - favourite genre of music")
	}
}
writeYourGenres()


showMyDB(personalMovieDB.private)
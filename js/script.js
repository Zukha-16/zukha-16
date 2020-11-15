const numberOfFilms = prompt("How many movies have you watched already?", "");
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

const a = prompt("The last wathced movie?", ""),
						b = prompt("How good was it?", ""),
						c = prompt("The last wathced movie?", ""),
						d = prompt("How good was it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
const numberOfFilms = +prompt("How many movies have you watched already?", "");
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};


for (let i = 0; i < numberOfFilms; i++){
const a = prompt("The last wathced movie?", ""),
						b = prompt("How good was it?", "");

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else{
			console.log('error');
			i--;
		}
		
}
if (personalMovieDB.count == 0) {
	alert("You don't like movies?")
} else if (personalMovieDB.count < 10 && personalMovieDB.count > 0){
	alert('Not so many movies watched!')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
	alert('Not bad! You are classic movie watcher!')
} else if (personalMovieDB.count > 30) {
	alert('You are big fan of movies!')	
} else{
	alert('Error!')
}

console.log(personalMovieDB);
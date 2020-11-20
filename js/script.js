"ue strict"

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: false,
	start: function() {
		personalMovieDB.count = +prompt("How many movies have you watched already?", "");
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("How many movies have you watched already?", "");
		}
	},
	rememberMyFilms: function () {
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
},
	detectPersonalLevel: function() {
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
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if(personalMovieDB.private){
			personalMovieDB.private = false;
		} else{
			personalMovieDB.private = true;
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt("What is your " + i + " - favourite genre of music");
			if (genre === null || genre == ''){
				console.log('Sorry wrong input!');
				i--;
			} else {
				personalMovieDB.genres[i - 1] = genre;
			}
			// Альтернативный вариант из урока

            // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            // if (genres === '' || genres == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres = genres.split(', ');
            //     personalMovieDB.genres.sort();
            // } 
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Your favourite genre is ${item} - ${i + 1}`);
		})
	}

};




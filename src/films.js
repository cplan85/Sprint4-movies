// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  return array.map((movie) => movie.director);
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter((movie) =>
    movie.director == director ? movie.title : null
  );
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const count = array.filter((movie) => movie.director == director).length;
  const sumOfScores = array.reduce((sum, movie) => {
    return movie.director === director ? sum + movie.score : null;
  }, 0);
  return sumOfScores / count;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  return [...array]
    .sort((movieA, movieB) => {
      return movieA.title === movieB.title
        ? 0
        : movieA.title > movieB.title
        ? 1
        : -1;
    })
    .filter((movie, idx) => idx < 20)
    .map((movie) => movie.title);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  return [...array].sort((movieA, movieB) => {
    const sortByTitle =
      movieA.title === movieB.title ? 0 : movieA.title > movieB.title ? 1 : -1;

    return movieA.year === movieB.year
      ? sortByTitle
      : movieA.year > movieB.year
      ? 1
      : -1;
  });
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const count = array.filter(
    (movie) => movie.genre.includes(genre) && movie.score !== ''
  ).length;
  const sumOfScores = array.reduce((sum, movie) => {
    return movie.genre.includes(genre) ? sum + movie.score : null;
  }, 0);
  return sumOfScores / count;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const twoNumbers = (duration) => {
    let captureLetters = /[a-z]/gi;
    return duration.replace(captureLetters, '').split(' ');
  };

  return [...array].map((movie) => ({
    ...movie,
    duration:
      parseInt(twoNumbers(movie.duration)[0]) * 60 +
      (twoNumbers(movie.duration).length === 2
        ? parseInt(twoNumbers(movie.duration)[1])
        : 0)
  }));
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  return [
    array
      .filter((movie) => movie.year == year)
      .sort((movieA, movieB) => {
        return movieA.score === movieB.score
          ? 0
          : movieA.score < movieB.score
          ? 1
          : -1;
      })[0]
  ];
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}

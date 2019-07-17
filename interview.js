function movieTimes(flight_length, movie_lengths) {
  let movieLengthsSeen = new Set();

  for (var i = 0; i < movie_lengths.length; i++) {
    var firstMovieLength = movie_lengths[i];
    let complementMovieLength = flight_length - firstMovieLength;

    if (movieLengthsSeen.has(complementMovieLength)) {
      return true;
    }
    movieLengthsSeen.add(firstMovieLength);
    console.log(movieLengthsSeen);
  }
  return false;
}

console.log(movieTimes(120, [80, 150, 40, 20]));

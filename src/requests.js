const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  fetchTrendingAllWeek: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchTrendingMovieWeek: `/trending/movie/week?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchTrendingTvWeek: `/trending/tv/week?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchTrendingPersonWeek: `/trending/person/week?api_key=${TMDB_API_KEY}&language=en-US`,
  
  fetchTrendingAllDay: `/trending/all/day?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchTrendingMovieDay: `/trending/movie/day?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchTrendingTvDay: `/trending/tv/day?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchTrendingPersonDay: `/trending/person/day?api_key=${TMDB_API_KEY}&language=en-US`,
  
  fetchMovieTopRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchMoviePopular: `/movie/popular?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchMovieLatest: `/movie/latest?api_key=${TMDB_API_KEY}&language=en-US`,
  
  fetchTvTopRated: `/tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchTvPopular: `/tv/popular?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchTvLatest: `/tv/latest?api_key=${TMDB_API_KEY}&language=en-US`,
  
  fetchDiscoverMovieAction: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
  fetchDiscoverMovieComedy: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
  fetchDiscoverMovieHorror: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
  fetchDiscoverMovieRomance: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
  fetchDiscoverMovieDocumentary: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99`,
  
  fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
};

export default requests;
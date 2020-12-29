const API_KEY = 'f281b055a39571bcc8ae3689ad8986db';

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=es-ES`,
  fetchTrending: `/trending/movies/week?api_key=${API_KEY}&language=es-ES`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=28&language=es-ES`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=35&language=es-ES`,
  fetchCrimeTVShows: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=80&language=es-ES`,
  fetchPersonPopular: `/person/popular?api_key=${API_KEY}&language=es-ES&page=1`,
  search: `/search/multi?api_key=${API_KEY}&language=es-ES&page=1&include_adult=false`,
};

export default requests;

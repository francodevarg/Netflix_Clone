const API_KEY = 'f281b055a39571bcc8ae3689ad8986db';

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=es-ES`,
  fetchTrending: `/trending/movies/week?api_key=${API_KEY}&language=es-ES`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
  search: `/search/multi?api_key=${API_KEY}&language=es-ES&page=1&include_adult=false`,
};

export default requests;

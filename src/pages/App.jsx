import React from 'react';
import 'boxicons/dist/boxicons';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../requests';
import '../assets/styles/App.scss';

const App = () => {
  window.onscroll = () => {
    document.querySelector('.navbar').classList.toggle('navbar--active', window.pageYOffset > 50);
  };
  return (
    <>
      <Navbar />
      <Banner />
      <main>
        <Row title='Originales de Netflix' fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} />
        <Row title='Tendencias' fetchURL={requests.fetchTrending} />
        <Row title='Las mejores Películas' fetchURL={requests.fetchTopRated} />
        <Row title='Películas de acción' fetchURL={requests.fetchActionMovies} />
        <Row title='Series de crimen' fetchURL={requests.fetchCrimeTVShows} isLargeRow={true} />
        <Row title='Películas de comedia' fetchURL={requests.fetchComedyMovies} />
      </main>
    </>
  );
};

export default App;

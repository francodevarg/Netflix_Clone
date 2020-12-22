import React from 'react';
import 'boxicons/dist/boxicons';
import Navbar from '../components/Navbar';
import Row from '../components/Row';
import requests from '../requests';
import '../assets/styles/App.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Row title='Originales de Netflix' fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} />
        <Row title='Tendencias' fetchURL={requests.fetchTrending} />
        <Row title='Las mejores Películas' fetchURL={requests.fetchTopRated} />
      </main>
    </>
  );
};

export default App;

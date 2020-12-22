import React from 'react';
import 'boxicons/dist/boxicons';
import '../assets/styles/App.scss';
import Navbar from '../components/Navbar';
import Row from '../components/Row';
import requests from '../requests';

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

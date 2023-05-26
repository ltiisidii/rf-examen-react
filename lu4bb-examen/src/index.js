import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import NavBar from './component/NavBar';
import SimuladorNovicio from './component/SimuladorNovicio';
import InfoTecnica from './component/InfoTecnica';
import InfoReglamentacion from './component/InfoReglamentacion';
import PlaylistYoutube from './component/YoutubePlaylist';
import Contactanos from './component/Contactanos';
import Electronica from './component/Electronica';
import Bandas from './component/Bandas';
import CalculatorDipole from './component/Calc-Dipolo'
import MorseSimulator from './component/MorseSimulator';

const Root = () => {
  return (
    <Router>
      <div id="root">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/simulador-novicio" element={<SimuladorNovicio />} />
          <Route path="/info-tecnica" element={<InfoTecnica />} />
          <Route path="/info-reglamentacion" element={<InfoReglamentacion />} />
          <Route path="/playlist-youtube" element={<PlaylistYoutube />} />
          <Route path="/contact-us" element={<Contactanos />} />
          <Route path="/morse-sim" element={<MorseSimulator />} />
          <Route path="/electronica" element={<Electronica />} />
          <Route path="/bandas" element={<Bandas />} />
          <Route path="/calc-dipolo" element={<CalculatorDipole />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

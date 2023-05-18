import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import SimuladorNovicio from './component/SimuladorNovicio';
import InfoTecnica from './component/InfoTecnica';
import InfoReglamentacion from './component/InfoReglamentacion';
import NavBar from './component/NavBar';

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
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

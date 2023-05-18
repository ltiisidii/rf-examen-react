import React from 'react';
import NavBar from './component/NavBar';
import './app.css';

const App = () => {
  return (
    <>
      <NavBar />
      <div className="home-text">
        <h2>LU4BB Training Center</h2>
        <p>
          Plataforma de Training para ingreso a categoría Novicio, ascenso a categoría General y Superior.
        </p>
      </div>
    </>
  );
};

export default App;
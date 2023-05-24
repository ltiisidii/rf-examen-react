import React from 'react';
import './Home.css'; // Importar el archivo CSS

const Home = () => {
  return (
    <div className="home-container">
      <h2>p00lack Training Center</h2>
      {/*  <img src="/lu4bb-logo.jpg" alt="LU4BB Logo" className="logo" /> {/* Agregar la imagen desde la carpeta "public" */}
      <div className="home-content">
        <p>Plataforma de Training para ingreso a categoría Novicio, ascenso a categoría General y Superior.</p>
      </div>
    </div>
  );
};

export default Home;
import React, { useState, useEffect } from 'react';
import wordsData from '../sources/wordsData.json'; // Ruta al archivo JSON
import './MorseSimulator.css'; // Importar el archivo CSS

const MorseSimulator = () => {
  const [morseWord, setMorseWord] = useState('');
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    // Seleccionar una palabra aleatoria al cargar la página
    const randomIndex = Math.floor(Math.random() * wordsData.length);
    const randomWord = wordsData[randomIndex].word;
    setMorseWord(randomWord);
  }, []);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputMorse = userInput.trim();

    if (inputMorse === morseWord) {
      // Respuesta correcta
      alert('¡Respuesta correcta!');
    } else {
      // Respuesta incorrecta
      alert('Respuesta incorrecta');
    }

    // Seleccionar una palabra aleatoria del arreglo
    const randomIndex = Math.floor(Math.random() * wordsData.length);
    const randomWord = wordsData[randomIndex].word;

    setMorseWord(randomWord);
    setUserInput('');
  };

  return (
    <div className="container"> {/* Agrega el contenedor */}
      <div>
        <h1>Morse Simulator</h1>
        <p>Ingresa el código Morse para la siguiente palabra:</p>
        <p>{morseWord}</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={handleInputChange} />
          <button type="submit">Verificar</button>
        </form>
      </div>
    </div>
  );
};

export default MorseSimulator;
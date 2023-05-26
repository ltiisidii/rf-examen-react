import React, { useState } from 'react';
import wordsData from '../sources/wordsData.json';
import './MorseSimulator.css';

const MorseSimulator = () => {
  const [morseWords] = useState(wordsData);
  const [morseInput, setMorseInput] = useState('');
  const [results, setResults] = useState([]);
  const [isValidInput, setIsValidInput] = useState(true);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    setMorseInput(value);
    setIsValidInput(true);

    // Update results array with user's input
    const updatedResults = [...results];
    updatedResults[index] = value;
    setResults(updatedResults);
  };

  const validateMorseInput = (input) => {
    // Validate input to allow only '.', '-', and spaces
    const validCharsRegex = /^[.\-\s]+$/;
    return validCharsRegex.test(input);
  };

  const handleSubmit = () => {
    // Validate user's inputs
    const isValid = validateMorseInput(morseInput);

    if (!isValid) {
      setIsValidInput(false);
    } else {
      setIsValidInput(true);
    }

    setMorseInput('');
    setShowResults(true);
  };

  const calculateResult = (index) => {
    const currentWord = morseWords[index];
    const isCorrect =
      results[index] &&
      results[index].toLowerCase() === currentWord.morse.toLowerCase();

    return isCorrect ? 'Respuesta correcta' : 'Respuesta incorrecta';
  };

  return (
    <div className="container">
      <div>
        <h1>Morse Simulator</h1>
        {morseWords.map((wordObj, index) => (
          <div key={index}>
            <p>Ingresa el código Morse correspondiente a la palabra: {wordObj.word}</p>
            <input
              type="text"
              value={results[index] || ''}
              onChange={(e) => handleInputChange(e, index)}
              disabled={showResults}
            />
          </div>
        ))}
        {!isValidInput && (
          <span className="error-message">
            Caracteres no válidos. Introduce solo '.', '-', y espacios.
          </span>
        )}
        {!showResults ? (
          <button onClick={handleSubmit}>Enviar respuestas</button>
        ) : (
          <div>
            <hr />
            <h2>Mostrar resultados</h2>
            {morseWords.map((wordObj, index) => (
              <p key={index}>
                {wordObj.word}: {calculateResult(index)}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MorseSimulator;

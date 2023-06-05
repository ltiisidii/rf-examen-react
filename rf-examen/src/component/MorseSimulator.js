import React, { useState } from 'react';
import { Box, Button, Input } from "@chakra-ui/react";
import wordsData from '../sources/wordsData.json';
import './MorseSimulator.css';
import imagen1 from './images/imagen1.png';
import imagen2 from './images/imagen2.png';
import imagen3 from './images/imagen3.jpg';

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
    <Box className="container">
      <Box>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <img src={imagen1} alt="Descripción de la imagen" />
          <img src={imagen2} alt="Descripción de la imagen" />
          <img src={imagen3} alt="Descripción de la imagen" />
        </div>
        <h1>Morse Simulator</h1>
        {morseWords.map((wordObj, index) => (
          <Box key={index}>
            <p>
              Ingresa el código Morse correspondiente a la palabra: {wordObj.word}
            </p>
            <Input
              type="text"
              value={results[index] || ""}
              onChange={(e) => handleInputChange(e, index)}
              isDisabled={showResults}
            />
          </Box>
        ))}
        {!isValidInput && (
          <Box className="error-message">
            Caracteres no válidos. Introduce solo '.', '-', y espacios.
          </Box>
        )}
        {!showResults ? (
          <Button onClick={handleSubmit}>Enviar respuestas</Button>
        ) : (
          <Box>
            <hr />
            <h2>Mostrar resultados</h2>
            {morseWords.map((wordObj, index) => (
              <p key={index}>
                {wordObj.word}: {calculateResult(index)}
              </p>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MorseSimulator;

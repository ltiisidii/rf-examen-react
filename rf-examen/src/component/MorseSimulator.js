import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@chakra-ui/react";
import wordsData from '../sources/wordsData.json';
import './MorseSimulator.css';

const MorseSimulator = () => {
  const [morseWords, setMorseWords] = useState([]);
  const [userInputs, setUserInputs] = useState([]);
  const [isExamCompleted, setIsExamCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(new Array(25).fill(false));

  useEffect(() => {
    const randomIndices = getRandomIndices(wordsData.length, 25);
    const randomWords = randomIndices.map((index) => wordsData[index].word);
    setMorseWords(randomWords);
    setUserInputs(new Array(25).fill(''));
  }, []);

  useEffect(() => {
    const isAllCorrect = userInputs.every((input, index) => input.trim() === morseWords[index]);
    setIsExamCompleted(isAllCorrect);
  }, [userInputs, morseWords]);

  const getRandomIndices = (max, count) => {
    const indices = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  };

  const handleInputChange = (event, index) => {
    const newInputs = [...userInputs];
    newInputs[index] = event.target.value;
    setUserInputs(newInputs);

    const isCorrect = event.target.value.trim() === wordsData[index].word;
    const newAnswerCorrect = [...isAnswerCorrect];
    newAnswerCorrect[index] = isCorrect;
    setIsAnswerCorrect(newAnswerCorrect);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div>
        <h1>Morse Simulator</h1>
        {morseWords.map((word, index) => (
          <div key={index}>
            <p>Ingresa el código Morse para la siguiente palabra:</p>
            <p>{word}</p>
            <form>
              <input type="text" value={userInputs[index]} onChange={(event) => handleInputChange(event, index)} />
            </form>
            {isAnswerCorrect[index] && <p className="correct-answer">Respuesta correcta</p>}
            {!isAnswerCorrect[index] && userInputs[index].trim() !== '' && <p className="incorrect-answer">Respuesta incorrecta</p>}
            {isExamCompleted && index === morseWords.length - 1 && (
              <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Examen completado</ModalHeader>
                  <ModalBody>
                    ¡Respuestas correctas en todos los inputs!
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" onClick={handleCloseModal}>Cerrar</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MorseSimulator;

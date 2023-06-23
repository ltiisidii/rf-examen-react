import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Box, Input, Button, VStack, Text, Grid } from '@chakra-ui/react';

const MorseCodeConverter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const audioContextRef = useRef(null);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    if (inputValue === '') {
      setOutput('');
    } else {
      const convertedText = asciiToMorse(inputValue);
      setOutput(convertedText);
    }
  };

  const playMorseCode = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    const dotDuration = 100; // Duration of a dot in milliseconds
    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);
    oscillator.type = 'sine';
    oscillator.frequency.value = 440; // Frequency of the tone (A4)

    const morseCode = output.replace(/[^.-\s]/g, ''); // Remove non-Morse code characters

    morseCode.split('').forEach((symbol, index) => {
      if (symbol === '.') {
        oscillator.frequency.setValueAtTime(440, audioContextRef.current.currentTime + index * dotDuration / 1000);
        gainNode.gain.setValueAtTime(1, audioContextRef.current.currentTime + index * dotDuration / 1000);
        gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime + (index + 1) * dotDuration / 1000);
      } else if (symbol === '-') {
        oscillator.frequency.setValueAtTime(440, audioContextRef.current.currentTime + index * dotDuration / 1000);
        gainNode.gain.setValueAtTime(1, audioContextRef.current.currentTime + index * dotDuration / 1000);
        gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime + (index + 1) * dotDuration / 1000);
      } else if (symbol === ' ') {
        // Pause between characters
        oscillator.frequency.setValueAtTime(0, audioContextRef.current.currentTime + index * dotDuration / 1000);
      }
    });

    oscillator.start();
    oscillator.stop(audioContextRef.current.currentTime + morseCode.length * dotDuration / 1000);
  };
  
  const asciiToMorse = (ascii) => {
    const asciiToMorseMap = {
      A: '.-',
      B: '-...',
      C: '-.-.',
      D: '-..',
      E: '.',
      F: '..-.',
      G: '--.',
      H: '....',
      I: '..',
      J: '.---',
      K: '-.-',
      L: '.-..',
      M: '--',
      N: '-.',
      O: '---',
      P: '.--.',
      Q: '--.-',
      R: '.-.',
      S: '...',
      T: '-',
      U: '..-',
      V: '...-',
      W: '.--',
      X: '-..-',
      Y: '-.--',
      Z: '--..',
      1: '.----',
      2: '..---',
      3: '...--',
      4: '....-',
      5: '.....',
      6: '-....',
      7: '--...',
      8: '---..',
      9: '----.',
      0: '-----',
      ' ': '/',
    };
  
    const words = ascii.toUpperCase().split(' ');
    const convertedWords = words.map((word) => {
      const letters = word.split('');
      const convertedLetters = letters.map((letter) => asciiToMorseMap[letter]);
      return convertedLetters.join(' ');
    });
  
    return convertedWords.join(' / ');
  };

  return (
    <Box p={4} bg="gray.100" display="flex" justifyContent="center" alignItems="center" height="100vh">
      <VStack spacing={4} align="flex-start">
        <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%">
          <Box>
            <Text>Texto:</Text>
            <Input
              type="text"
              value={input}
              onChange={handleInputChange}
              height="9rem"
            />
          </Box>
          <Box>
            <Text>Morse:</Text>
            <Input type="text" value={output} readOnly height="9rem"/>
            <Button onClick={playMorseCode}>Reproducir</Button>
          </Box>
        </Grid>
      </VStack>
    </Box>
  );
};

ReactDOM.render(<MorseCodeConverter />, document.getElementById('root'));

export default MorseCodeConverter;

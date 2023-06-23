import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Box, Text, Grid, Textarea, Button, VStack } from '@chakra-ui/react';

const MorseCodeConverter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const audioContextRef = useRef(null);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    if (isMorseCode(inputValue)) {
      const convertedText = morseToAscii(inputValue);
      setOutput(convertedText);
    } else {
      const convertedText = asciiToMorse(inputValue);
      setOutput(convertedText);
    }
  };

  const handleOutputChange = (e) => {
    const outputValue = e.target.value;
    setOutput(outputValue);
  
    if (isMorseCode(outputValue)) {
      const convertedText = morseToAscii(outputValue);
      setInput(convertedText);
    } else {
      const morseCodeFromClipboard = outputValue.match(/[.-\s/]+/g)?.join('');
      if (morseCodeFromClipboard) {
        const convertedText = morseToAscii(morseCodeFromClipboard);
        setInput(convertedText);
      } else {
        setInput(outputValue);
      }
    }
  };

  const playMorseCode = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    const ditDuration = 80; // Duration of a dit in milliseconds
    const dahDuration = ditDuration * 3; // Duration of a dah is 3 times the duration of a dit
    const pauseDuration = ditDuration; // Duration of pause between dits and dahs
    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);
    oscillator.type = 'sine';

    const morseCode = output.replace(/[^.-\s]/g, ''); // Remove non-Morse code characters
    let currentTime = audioContextRef.current.currentTime;

    morseCode.split('').forEach((symbol, index) => {
      if (symbol === '.') {
        oscillator.frequency.setValueAtTime(600, currentTime);
        gainNode.gain.setValueAtTime(1, currentTime);
        currentTime += ditDuration / 1000;
        gainNode.gain.setValueAtTime(0, currentTime);
        currentTime += pauseDuration / 1000;
      } else if (symbol === '-') {
        oscillator.frequency.setValueAtTime(600, currentTime);
        gainNode.gain.setValueAtTime(1, currentTime);
        currentTime += dahDuration / 1000;
        gainNode.gain.setValueAtTime(0, currentTime);
        currentTime += pauseDuration / 1000;
      } else if (symbol === ' ') {
        // Pause between characters
        currentTime += pauseDuration / 1000;
      }
    });

    oscillator.start();
    oscillator.stop(currentTime + pauseDuration / 1000);
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

  const morseToAscii = (morse) => {
    const morseToAsciiMap = {
      '.-': 'A',
      '-...': 'B',
      '-.-.': 'C',
      '-..': 'D',
      '.': 'E',
      '..-.': 'F',
      '--.': 'G',
      '....': 'H',
      '..': 'I',
      '.---': 'J',
      '-.-': 'K',
      '.-..': 'L',
      '--': 'M',
      '-.': 'N',
      '---': 'O',
      '.--.': 'P',
      '--.-': 'Q',
      '.-.': 'R',
      '...': 'S',
      '-': 'T',
      '..-': 'U',
      '...-': 'V',
      '.--': 'W',
      '-..-': 'X',
      '-.--': 'Y',
      '--..': 'Z',
      '.----': '1',
      '..---': '2',
      '...--': '3',
      '....-': '4',
      '.....': '5',
      '-....': '6',
      '--...': '7',
      '---..': '8',
      '----.': '9',
      '-----': '0',
      '/': ' ',
    };

    const words = morse.split('/');
    const convertedWords = words.map((word) => {
      const letters = word.trim().split(' ');
      const convertedLetters = letters.map((letter) => morseToAsciiMap[letter]);
      return convertedLetters.join('');
    });

    return convertedWords.join(' ');
  };

  const isMorseCode = (text) => {
    const morseCodeRegex = /^[.-\s/]+$/;
    return morseCodeRegex.test(text);
  };

  return (
    <Box p={4} bg="gray.100" display="flex" justifyContent="center" alignItems="center" height="100vh">
      <VStack spacing={4} align="center">
        <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%">
          <Box>
            <Text>Texto:</Text>
            <Textarea
              type="text"
              value={input}
              onChange={handleInputChange}
              height="9rem"
              resize="none"
            />
          </Box>
          <Box>
            <Text>Morse:</Text>
            <Textarea
              type="text"
              value={output}
              onChange={handleOutputChange}
              height="9rem"
              resize="none"
            />
            <Button onClick={playMorseCode}>Reproducir</Button>
          </Box>
        </Grid>

        {/* Nueva sección para la tabla */}
        <Box mt={8}>
        <Text as="h2" fontSize="xl" fontWeight="bold" mb={2} textAlign="center">
            Alfabeto Morse
          </Text>
          <table style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
{/*                 <th style={tableHeaderStyle}>Latino</th>
                <th style={tableHeaderStyle}>Morse</th>
                <th style={tableHeaderStyle}>Latino</th>
                <th style={tableHeaderStyle}>Morse</th>
                <th style={tableHeaderStyle}>Latino</th>
                <th style={tableHeaderStyle}>Morse</th> */}
              </tr>
            </thead>
            <tbody>
              {/* Filas de la tabla */}
              <tr>
                <td style={tableCellStyle}><strong>A</strong></td>
                <td style={tableCellStyle}>.-</td>
                <td style={tableCellStyle}><strong>B</strong></td>
                <td style={tableCellStyle}>-...</td>
                <td style={tableCellStyle}><strong>C</strong></td>
                <td style={tableCellStyle}>-.-.</td>
              </tr>
              <tr>
                <td style={tableCellStyle}><strong>D</strong></td>
                <td style={tableCellStyle}>-..</td>
                <td style={tableCellStyle}><strong>E</strong></td>
                <td style={tableCellStyle}>.</td>
                <td style={tableCellStyle}><strong>F</strong></td>
                <td style={tableCellStyle}>..-.</td>
              </tr>
              <tr>
                <td style={tableCellStyle}><strong>G</strong></td>
                <td style={tableCellStyle}>--.</td>
                <td style={tableCellStyle}><strong>H</strong></td>
                <td style={tableCellStyle}>....</td>
                <td style={tableCellStyle}><strong>I</strong></td>
                <td style={tableCellStyle}>..</td>
              </tr>
              <tr>
                <td style={tableCellStyle}><strong>J</strong></td>
                <td style={tableCellStyle}>.---</td>
                <td style={tableCellStyle}><strong>K</strong></td>
                <td style={tableCellStyle}>-.-</td>
                <td style={tableCellStyle}><strong>L</strong></td>
                <td style={tableCellStyle}>.-..</td>
              </tr>
              <tr>
                <td style={tableCellStyle}><strong>M</strong></td>
                <td style={tableCellStyle}>--</td>
                <td style={tableCellStyle}><strong>N</strong></td>
                <td style={tableCellStyle}>-</td>
                <td style={tableCellStyle}><strong>O</strong></td>
                <td style={tableCellStyle}>---</td>
              </tr>
              <tr>
                <td style={tableCellStyle}><strong>P</strong></td>
                <td style={tableCellStyle}>.--.</td>
                <td style={tableCellStyle}><strong>Q</strong></td>
                <td style={tableCellStyle}>--.-</td>
                <td style={tableCellStyle}><strong>R</strong></td>
                <td style={tableCellStyle}>.-.</td>
              </tr>
              <tr>
                <td style={tableCellStyle}><strong>S</strong></td>
                <td style={tableCellStyle}>...</td>
                <td style={tableCellStyle}><strong>T</strong></td>
                <td style={tableCellStyle}>-</td>
                <td style={tableCellStyle}><strong>U</strong></td>
                <td style={tableCellStyle}>..-</td>
              </tr>
              <tr>
                <td style={tableCellStyle}><strong>V</strong></td>
                <td style={tableCellStyle}>...-</td>
                <td style={tableCellStyle}><strong>W</strong></td>
                <td style={tableCellStyle}>.--</td>
                <td style={tableCellStyle}><strong>X</strong></td>
                <td style={tableCellStyle}>-..-</td>
              </tr>
              <tr>
                <td style={tableCellStyle}><strong>Y</strong></td>
                <td style={tableCellStyle}>-.--</td>
                <td style={tableCellStyle}><strong>Z</strong></td>
                <td style={tableCellStyle}>--..</td>
                <td style={tableCellStyle}><strong>Á</strong></td>
                <td style={tableCellStyle}>.-.--</td>
              </tr>
              <tr>
                <td style={tableCellStyle}><strong>É</strong></td>
                <td style={tableCellStyle}>..-..</td>
                <td style={tableCellStyle}><strong>Ñ</strong></td>
                <td style={tableCellStyle}>--.--</td>
                <td style={tableCellStyle}><strong>Ó</strong></td>
                <td style={tableCellStyle}>---</td>
              </tr>
            </tbody>
          </table>
        </Box>
      </VStack>
    </Box>
  );
};

const tableHeaderStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'center',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'center',
};


ReactDOM.render(<MorseCodeConverter />, document.getElementById('root'));

export default MorseCodeConverter;


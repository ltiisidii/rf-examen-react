import React, { useState } from 'react';
import DipoleAntenna from './images/dipole-antenna.svg';

const CalculatorDipole = () => {
  const [frequency, setFrequency] = useState('');
  const [length, setLength] = useState('');
  const [armLength, setArmLength] = useState('');

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
  };

  const calculateLength = () => {
    const frequencyInMHz = parseFloat(frequency);
    if (!isNaN(frequencyInMHz)) {
      const lengthValue = 143 / frequencyInMHz;
      const armLengthValue = lengthValue / 2;
      setLength(lengthValue.toFixed(2));
      setArmLength(armLengthValue.toFixed(2));
    } else {
      setLength('');
      setArmLength('');
    }
  };

  const convertToCentimeters = (value) => {
    const meters = parseFloat(value);
    if (!isNaN(meters)) {
      const centimeters = meters * 100;
      return centimeters.toFixed(2);
    }
    return '';
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', paddingTop: '50px' }}>Calculadora de Antena Dipolo</h1>
        <div style={{ textAlign: 'center' }}>
            <p>Las antenas dipolos son fáciles de construir y pueden ser muy efectivas cuando se colocan a media longitud de onda o más sobre el suelo.
            Ingrese la frecuencia operativa deseada en megahercios para obtener una buena longitud inicial para un dipolo en pies y metros. </p>
            <p>La fórmula para calcular la longitud aproximada de un dipolo es: Longitud del dipolo en metros: 143 / frecuencia en MHz</p>
            <p>Estos son solo valores aproximados. En la práctica, es mejor hacer que la antena sea un poco más larga que el valor calculado y luego recortarla para obtener el mejor valor de SWR.</p>
            <label>
            Frecuencia (MHz):
            <input type="text" value={frequency} onChange={handleFrequencyChange} />
            </label>
            <button onClick={calculateLength}>Calcular</button>
            {length && armLength && (
            <div>
                <p>Largo del dipolo (L): {length} metros</p>
                <p>Brazo de cada dipolo (I): {armLength} metros</p>
                <p>Largo del dipolo (L) en centímetros: {convertToCentimeters(length)} centímetros</p>
                <p>Brazo de cada dipolo (I) en centímetros: {convertToCentimeters(armLength)} centímetros</p>
            </div>
            )}
        </div>
        <div style={{ textAlign: 'center' }}>
            <img
            src={DipoleAntenna}
            alt="Calculadora Dipolo"
            style={{
                maxWidth: '100%',
                height: 'auto',
                '@media (max-width: 768px)': {
                maxWidth: '80%',
                },
            }}
            />
        </div>
    </div>
  );
};

export default CalculatorDipole;

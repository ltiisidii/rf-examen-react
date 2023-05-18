import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 20px 10px;
  background: #313338;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 2vh; /* Establecer una altura máxima del 10% de la página */

  @media (max-width: 1000px) {
    padding: 20px;
  }
`;
import React, { useState, useEffect } from "react";
import preguntasTecnica from "../sources/quiz-novicio-tecnica.json";
import preguntasReglamentacion from "../sources/quiz-novicio-reglamentacion.json";
import './Examen.css';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@chakra-ui/react";

const Examen = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [respuestasTecnica, setRespuestasTecnica] = useState({});
  const [respuestasReglamentacion, setRespuestasReglamentacion] = useState({});
  const [evaluado, setEvaluado] = useState(false);
  const [aprobadoTecnica, setAprobadoTecnica] = useState(false);
  const [aprobadoReglamentacion, setAprobadoReglamentacion] = useState(false);
  const [porcentajeCorrectasTecnica, setPorcentajeCorrectasTecnica] = useState(0);
  const [porcentajeIncorrectasTecnica, setPorcentajeIncorrectasTecnica] = useState(0);
  const [porcentajeCorrectasReglamentacion, setPorcentajeCorrectasReglamentacion] = useState(0);
  const [porcentajeIncorrectasReglamentacion, setPorcentajeIncorrectasReglamentacion] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const preguntasTecnicaAleatorias = seleccionarPreguntasAleatorias(preguntasTecnica, 15);
    const preguntasReglamentacionAleatorias = seleccionarPreguntasAleatorias(preguntasReglamentacion, 15);
    setPreguntas([...preguntasTecnicaAleatorias, ...preguntasReglamentacionAleatorias]);
  }, []);

  const seleccionarPreguntasAleatorias = (preguntas, cantidad) => {
    const preguntasAleatorias = [];
    const preguntasCopiadas = [...preguntas];

    while (preguntasAleatorias.length < cantidad && preguntasCopiadas.length > 0) {
      const indiceAleatorio = Math.floor(Math.random() * preguntasCopiadas.length);
      const preguntaAleatoria = preguntasCopiadas.splice(indiceAleatorio, 1)[0];
      preguntasAleatorias.push(preguntaAleatoria);
    }

    return preguntasAleatorias;
  };

  const handleSeleccionarRespuestaTecnica = (preguntaId, respuesta) => {
    setRespuestasTecnica((prevRespuestasTecnica) => {
      const nuevasRespuestasTecnica = { ...prevRespuestasTecnica };

      nuevasRespuestasTecnica[preguntaId] = respuesta;

      return nuevasRespuestasTecnica;
    });
  };

  const handleSeleccionarRespuestaReglamentacion = (preguntaId, respuesta) => {
    setRespuestasReglamentacion((prevRespuestasReglamentacion) => {
      const nuevasRespuestasReglamentacion = { ...prevRespuestasReglamentacion };

      if (!nuevasRespuestasReglamentacion[preguntaId]) {
        // La respuesta no estaba seleccionada, la agregamos
        nuevasRespuestasReglamentacion[preguntaId] = [respuesta];
      } else {
        // La respuesta ya estaba seleccionada, la removemos si está presente o la agregamos si no está
        const respuestasSeleccionadas = nuevasRespuestasReglamentacion[preguntaId];
        const index = respuestasSeleccionadas.indexOf(respuesta);

        if (index > -1) {
          respuestasSeleccionadas.splice(index, 1);
        } else {
          respuestasSeleccionadas.push(respuesta);
        }

        nuevasRespuestasReglamentacion[preguntaId] = respuestasSeleccionadas;
      }

      return nuevasRespuestasReglamentacion;
    });
  };

  const evaluarExamen = () => {
    setIsModalOpen(true);
    const todasRespondidas = preguntas.every((pregunta) => {
      if (pregunta.type === "tecnica") {
        return respuestasTecnica.hasOwnProperty(pregunta.id);
      } else if (pregunta.type === "reglamentacion") {
        return respuestasReglamentacion.hasOwnProperty(pregunta.id);
      }
      return false;
    });

    if (!todasRespondidas) {
      alert("Debes responder todas las preguntas antes de evaluar el examen.");
      return;
    }

    let totalTecnica = 0;
    let correctasTecnica = 0;
    let incorrectasTecnica = 0;
    let totalReglamentacion = 0;
    let correctasReglamentacion = 0;
    let incorrectasReglamentacion = 0;

    preguntas.forEach((pregunta) => {
      if (pregunta.type === "tecnica") {
        totalTecnica++;
        if (pregunta.correctAnswer === respuestasTecnica[pregunta.id]) {
          correctasTecnica++;
        } else {
          incorrectasTecnica++;
        }
      } else if (pregunta.type === "reglamentacion") {
        totalReglamentacion++;
        const respuestasSeleccionadas = respuestasReglamentacion[pregunta.id] || [];
        const respuestasCorrectas = pregunta.correctAnswer;

        if (
          respuestasSeleccionadas.length === respuestasCorrectas.length &&
          respuestasSeleccionadas.every((respuesta) => respuestasCorrectas.includes(respuesta))
        ) {
          correctasReglamentacion++;
        } else {
          incorrectasReglamentacion++;
        }
      }
    });

    const porcentajeCorrectasTecnica = (correctasTecnica / totalTecnica) * 100;
    const porcentajeIncorrectasTecnica = (incorrectasTecnica / totalTecnica) * 100;
    const porcentajeCorrectasReglamentacion = (correctasReglamentacion / totalReglamentacion) * 100;
    const porcentajeIncorrectasReglamentacion = (incorrectasReglamentacion / totalReglamentacion) * 100;

    const aprobadoTecnica = porcentajeCorrectasTecnica >= 70;
    const aprobadoReglamentacion = porcentajeCorrectasReglamentacion >= 70;

    setAprobadoTecnica(aprobadoTecnica);
    setAprobadoReglamentacion(aprobadoReglamentacion);
    setPorcentajeCorrectasTecnica(porcentajeCorrectasTecnica);
    setPorcentajeIncorrectasTecnica(porcentajeIncorrectasTecnica);
    setPorcentajeCorrectasReglamentacion(porcentajeCorrectasReglamentacion);
    setPorcentajeIncorrectasReglamentacion(porcentajeIncorrectasReglamentacion);
    setEvaluado(true);
  };

  return (
    <div className="container">
      <div>
        <h5>Primera Parte:</h5>
        <h3>Teoría, Técnica, Propagación y Antenas</h3>
        <span>15 preguntas de 150 seleccionadas al azar</span>
  
        {preguntas.map((pregunta, index) => {
          return (
            <div key={pregunta.id}>
              {index === 15 && (
              <>
              <hr />
              <h5>Segunda Parte:</h5>
              <h3>Reglamentación y Ética Operativa</h3>
              <span>15 preguntas de 183 seleccionadas al azar</span>
              </>
              )}       
              <h3>{pregunta.title}</h3>
              {pregunta.question && (
                <p className="pregunta">{pregunta.question}</p>
              )} {/* Movido aquí para mostrar la pregunta primero */}
              {pregunta.type === "tecnica" ? (
                <div>
                  {pregunta.answers.map((respuesta) => {
                    const isChecked =
                      respuestasTecnica[pregunta.id] === respuesta;
                    return (
                      <div key={respuesta}>
                        <input
                          type="radio"
                          id={respuesta}
                          name={pregunta.id}
                          checked={isChecked}
                          onChange={() =>
                            handleSeleccionarRespuestaTecnica(
                              pregunta.id,
                              respuesta
                            )
                          }
                        />
                        <label
                          htmlFor={respuesta}
                          className="respuesta-label"
                          style={{ fontWeight: aprobadoTecnica ? "bold" : "bold", color: aprobadoTecnica ? "black" : "black" }}
                        >
                          {respuesta}
                        </label>{" "}
                        {/* Agrega la clase CSS "respuesta-label" */}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>

                  {pregunta.answers.map((respuesta) => {
                    const isChecked = (respuestasReglamentacion[
                      pregunta.id
                    ] || []).includes(respuesta);
                    return (
                      <div key={respuesta}> 
                        <input
                          type="checkbox"
                          id={respuesta}
                          name={pregunta.id}
                          checked={isChecked}
                          onChange={() =>
                            handleSeleccionarRespuestaReglamentacion(
                              pregunta.id,
                              respuesta
                            )
                          }
                        />
                        <label
                          htmlFor={respuesta}
                          className="respuesta-label"
                          style={{ fontWeight: aprobadoReglamentacion ? "bold" : "bold", color: aprobadoReglamentacion ? "black" : "black" }}
                        >
                          {respuesta}
                        </label>{" "}
                        {/* Agrega la clase CSS "respuesta-label" */}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
        <Button onClick={evaluarExamen}>Evaluar</Button>
        {evaluado && (
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isCentered>
          <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
          />
            <ModalContent
              bg="white"
              color="gray.800"
              borderRadius="2em"
              boxShadow="0 0 0 1px black"
              maxWidth="md"
              mt="40vh"
              mb="50vh"
              ml="50vh"
              mr="50vh"
              
              zIndex="modal"
              
              className="custom-modal"
          >
            <ModalHeader><center>Resultados</center></ModalHeader>
            
            <ModalBody>
            <center>
              <p>
                Porcentaje de respuestas correctas (Técnica): {porcentajeCorrectasTecnica.toFixed(2)}%
              </p>
              <p>
                Porcentaje de respuestas incorrectas (Técnica): {porcentajeIncorrectasTecnica.toFixed(2)}%
              </p>
              <p>
                Porcentaje de respuestas correctas (Reglamentación): {porcentajeCorrectasReglamentacion.toFixed(2)}%
              </p>
              <p>
                Porcentaje de respuestas incorrectas (Reglamentación): {porcentajeIncorrectasReglamentacion.toFixed(2)}%
              </p>
              <p>
                {aprobadoTecnica ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>Has aprobado la parte de Técnica.</span>
                ) : (
                  <span style={{ color: "red", fontWeight: "bold"  }}>No has aprobado la parte de Técnica.</span>
                )}
              </p>
              <p>
                {aprobadoReglamentacion ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>Has aprobado la parte de Reglamentación.</span>
                ) : (
                  <span style={{ color: "red", fontWeight: "bold" }}>No has aprobado la parte de Reglamentación.</span>
                )}
              </p>
            </center>
            </ModalBody>
            <ModalFooter>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
        )}
      </div>
  </div>
  );
};

export default Examen;

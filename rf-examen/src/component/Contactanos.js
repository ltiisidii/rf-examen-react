import React from 'react';

const Contactanos = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario de contacto
  };

  return (
    <div className="contact-form">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" rows="4" required></textarea>
        </div>
        <div>
          {/* Agrega aquí el componente del captcha */}
        </div>
        <button type="submit">Enviar</button>
        <h2>Este form esta sin funcionamiento.</h2>
      </form>
    </div>
  );
};

export default Contactanos;
// SaludoDinamico.js
import React from 'react';

class SaludoDinamico extends React.Component {
  render() {
    // Utiliza props para obtener el nombre del componente principal
    const { nombre } = this.props;

    // Mensaje de saludo personalizado
    const mensaje = `¡Hola, ${nombre}! Bienvenido al componente de saludo dinámico.`;

    return (
      <div>
        <p>{mensaje}</p>
      </div>
    );
  }
}

export default SaludoDinamico;
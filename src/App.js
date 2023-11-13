// App.js
import React from 'react';
import SaludoSimple from './components/saludoSimple';
import SaludoDinamico from './components/saludoDinamico';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Saludando</h1>

        {/* Saludo Simple */}
        <SaludoSimple />

        {/* Saludo Dinámico */}
        <SaludoDinamico nombre="Einstein" />
      </div>
    );
  }
}

export default App;

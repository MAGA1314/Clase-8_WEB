import logo from './logo.svg';
import './App.css';
import Contador from './Modulos/contador';

function App() {
  const usuarioUno = {
    cuenta: 80,
    edad: 12
  }
  return (
    <div>
        <main>
          <Contador cuenta = {usuarioUno.cuenta} edad = {usuarioUno.cuenta} />
        </main>
      
        <div>
        <Contador />
        </div>
    </div>
  );
}

export default App;

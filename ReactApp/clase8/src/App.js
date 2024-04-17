import logo from './logo.svg';
import './App.css';
import Contador from './Modulos/contador';

function App() {
  return (
    <div>
        <main>
          <Contador />
        </main>
      
        <div>
        <Contador />
        </div>
    </div>
  );
}

export default App;

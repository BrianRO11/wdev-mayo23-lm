import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

//Seccion de Componentes
import ListarCurso from './componentsCurso/index';

function App() {
  return (

  <div className="container">
    <ListarCurso></ListarCurso>
</div>

  );
}

export default App;

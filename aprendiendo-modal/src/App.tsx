import './App.css';
import ModalSaludando from './ModalSaludando';
import Formulario1 from './Formulario1';
import ModalSiguiente from './ModalSiguiente';
import ListaPaises from './ListaPaises';
import Testimonio from './Testimonio';
import MiComponentePersonalizadoPadre from './MiComponentePersonalizadoPadre';
import MiComponentePersonalizadoPadre2 from './MiComponentePersonalizadoPadre2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicación de React Mi Primer Modal</h1>
        <ModalSaludando></ModalSaludando>
        <Formulario1></Formulario1>
        <ListaPaises></ListaPaises>
        <h1>Testimonios</h1>
        <Testimonio 
            nombre = "Adolfo Vargas"
            edad = {31}
            cargo = "Profesor de programacion"
            imagen='Imagen1'/>
        <Testimonio 
            nombre = "Angie Obando"
            edad = {29}
            cargo = "Profesor de ingles"
            imagen='Imagen2'/>
        <Testimonio 
            nombre = "Natalia Castillo"
            edad = {28}
            cargo = "Ingeniero de software"
            imagen='Imagen3'/>
        <MiComponentePersonalizadoPadre />
        <MiComponentePersonalizadoPadre2></MiComponentePersonalizadoPadre2>
        <ModalSiguiente></ModalSiguiente>
      </header>
    </div>
  );
}

export default App;

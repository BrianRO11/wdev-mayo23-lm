import React from 'react';
import logo from './logo.svg';
import GoogleResena from './Reseña';
import GoogleTecnologias from './Tecnologias';
import GoogleBeneficios from './Beneficios';
import GoogleFormulario from './Formulario';
import GoogleTestimonio from './Testimonio';
import './App.css';
import './Testimonio.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <GoogleResena></GoogleResena> 

        <GoogleBeneficios></GoogleBeneficios>

        <div className='Tecnologias'>
        <GoogleTecnologias
        nombre="Google Cloud Platform (GCP)"
        imagen='GCloud'></ GoogleTecnologias>
        <GoogleTecnologias
        nombre="Kubernetes"
        imagen='Kubernetes'></GoogleTecnologias>
        <GoogleTecnologias
        nombre="TensorFlow"
        imagen='TensorFlow'></GoogleTecnologias>
        <GoogleTecnologias
        nombre="Android"
        imagen='Android'></GoogleTecnologias>
        <GoogleTecnologias
          nombre="Chrome"
        imagen='Chrome'></GoogleTecnologias>
        <GoogleTecnologias
        nombre="Google Search"
        imagen='GSearch'></GoogleTecnologias>
        <GoogleTecnologias
          nombre="Google Maps"
        imagen='GMaps'></GoogleTecnologias>
        <GoogleTecnologias
          nombre="Google Ads"
        imagen='GAdds'></GoogleTecnologias>
        <GoogleTecnologias
          nombre="Google Workspace"
        imagen='GWorkspace'></GoogleTecnologias>
        <GoogleTecnologias
          nombre="Google Assistant"
        imagen='GAssistant'></GoogleTecnologias>
        </div>

        <GoogleTestimonio
          
          cargo = "Ingeniero de Software Senior"
          nombre = "John Doe"
          edad ={35}
          imagen = 'John Doe'
          testimonio='Trabajar en Google ha sido una experiencia increíble. La cultura de la empresa fomenta la innovación y la colaboración, lo que nos permite crear productos que impactan a millones de personas en todo el mundo. Además, las oportunidades de crecimiento profesional son abundantes y el ambiente de trabajo es muy positivo.'
        ></GoogleTestimonio>
        <GoogleTestimonio
          nombre = "Jane Smith"
          edad ={28 }
          cargo = " Diseñadora de Experiencia de Usuario"
          imagen = 'Jane Smith'
          testimonio='Google es un lugar donde la creatividad y la pasión por la tecnología se unen. Como diseñadora de experiencia de usuario, tengo la oportunidad de trabajar en proyectos desafiantes y emocionantes que tienen un impacto real en la vida de las personas. Además, la empresa ofrece una serie de beneficios y programas para el bienestar de los empleados que hacen que trabajar aquí sea aún más gratificante'
        ></GoogleTestimonio>
        <GoogleTestimonio
          nombre = "Michael Johnson"
          edad ={42 }
          cargo = "Director de Marketing"
          imagen = "Michael"
          testimonio='Mi experiencia en Google ha sido una de las más enriquecedoras de mi carrera. La empresa valora la diversidad y la inclusión, lo que se refleja en la forma en que trabajamos y nos relacionamos entre nosotros. Además, la empresa se preocupa por el bienestar de sus empleados y ofrece una serie de beneficios y programas para apoyar su desarrollo profesional y personal.'
        ></GoogleTestimonio>
        <GoogleFormulario></GoogleFormulario>

      </header>
    </div>
    
  );
}

export default App;

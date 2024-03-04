import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Testimonio.css';
import FESTResena from './FESTResena';
import FESTBeneficios from './FESTBeneficios';
import FESTTestimonio from './FESTTestimonio';
import FESTTecnologias from './FESTTecnologias';
import FESTFormulario from './FESTFormulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <FESTResena></FESTResena> 
       <div className='Tecnologias'>
       <FESTTecnologias
       nombre="Angular"
       imagen='imgAngular'></FESTTecnologias>
       <FESTTecnologias
       nombre="React"
       imagen='imgReact'></FESTTecnologias>
       <FESTTecnologias
       nombre="VueJs"
       imagen='imgVueJS'></FESTTecnologias>
       <FESTTecnologias
       nombre="JavaScript"
       imagen='imgJavaScript'></FESTTecnologias>
       <FESTTecnologias
        nombre="JQuery"
       imagen='imgJQuery'></FESTTecnologias>
       <FESTTecnologias
       nombre="JSON"
       imagen='imgJSON'></FESTTecnologias>
       <FESTTecnologias
        nombre="CSS 3"
       imagen='imgCSS3'></FESTTecnologias>
       <FESTTecnologias
        nombre="HTML 5"
       imagen='imgHTML5'></FESTTecnologias>
       <FESTTecnologias
        nombre="Bootstrap"
       imagen='imgBootstrap'></FESTTecnologias>
       <FESTTecnologias
        nombre="Typescript"
       imagen='imgTypescript'></FESTTecnologias>
      </div>
       <FESTTestimonio
        nombre = "Jeremy"
        edad ={42}
        cargo = "Manager"
        imagen = 'Imagen1'
        testimonio='Como gerente de nuestra compañía y cliente de FEST, no puedo estar más satisfecho con los servicios de Front End que hemos recibido, sin duda el equipo de Front End Solutions Technologies desde el inicio del proyecto hasta su implementación, ha demostrado un alto nivel de profesionalismo y experiencia en el desarrollo de interfaces de usuario.
        El enfoque centrado en el cliente y la comprensión profunda de nuestras necesidades han sido clave para el éxito de este proyecto. El equipo no solo logró traducir nuestras ideas en una interfaz atractiva y funcional, sino que también brindaron sugerencias valiosas para mejorar la experiencia del usuario y la eficiencia operativa.'
       ></FESTTestimonio>
       <FESTTestimonio
        nombre = "Jeremy"
        edad ={35}
        cargo = "Team Lead"
        imagen = 'Imagen2'
        testimonio='¡Estoy impresionado con los servicios de Front End que he recibido de FEST (Front End Solutions Technologies), su equipo ha transformado por completo nuestra experiencia en línea. Desde la primera consulta hasta la entrega final, la solución que desarrollaron para nuestra interfaz de usuario es simplemente excepcional. No solo lograron mejorar la apariencia visual de nuestro sitio web, sino que también optimizaron la funcionalidad y la usabilidad de manera significativa. Ahora, nuestros clientes pueden navegar por nuestro sitio con facilidad y disfrutar de una experiencia fluida y agradable.'
       ></FESTTestimonio>
       <FESTTestimonio
        nombre = "Jennnifer"
        edad ={28}
        cargo = "Front End Developer"
        imagen = "Imagen3"
        testimonio='La comunicación fluida y la transparencia en todo el proceso nos mantuvieron informados y nos brindaron la confianza de que el proyecto se completaría a tiempo y dentro del presupuesto acordado. Además, la capacidad del equipo para adaptarse a nuestros cambios de último minuto y sus rápidas respuestas a nuestras consultas fueron realmente impresionantes.Recomendaría sin reservas los servicios de FEST a cualquier empresa que busque mejorar su presencia en línea y ofrecer una experiencia excepcional a sus usuarios.'
       ></FESTTestimonio>
       <FESTBeneficios></FESTBeneficios>
       <FESTFormulario></FESTFormulario>
       <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <svg className="bi" width="30" height="24"></svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-primary
            ">© 2024 FEST Front End Solutions Technologies</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
          </ul>
        </footer>
      </div>
      </header>
    </div>
    
  );
}

export default App;

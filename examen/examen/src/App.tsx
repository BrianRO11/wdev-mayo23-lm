import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Testimonio.css';
import GoogleResena from './Reseña';
import GoogleBeneficios from './Beneficios';
import GoogleTestimonio from './Testimonio';
import GoogleTecnologias from './Tecnologias';
import GoogleFormulario from './Formulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <GoogleResena></GoogleResena> 
       <div className='Tecnologias'>
       <GoogleTecnologias
       nombre="Angular"
       imagen='imgAngular'></ GoogleTecnologias>
       <GoogleTecnologias
       nombre="React"
       imagen='imgReact'></GoogleTecnologias>
       <GoogleTecnologias
       nombre="VueJs"
       imagen='imgVueJS'></GoogleTecnologias>
       <GoogleTecnologias
       nombre="JavaScript"
       imagen='imgJavaScript'></GoogleTecnologias>
       <GoogleTecnologias
        nombre="JQuery"
       imagen='imgJQuery'></GoogleTecnologias>
       <GoogleTecnologias
       nombre="JSON"
       imagen='imgJSON'></GoogleTecnologias>
       <GoogleTecnologias
        nombre="CSS 3"
       imagen='imgCSS3'></GoogleTecnologias>
       <GoogleTecnologias
        nombre="HTML 5"
       imagen='imgHTML5'></GoogleTecnologias>
       <GoogleTecnologias
        nombre="Bootstrap"
       imagen='imgBootstrap'></GoogleTecnologias>
       <GoogleTecnologias
        nombre="Typescript"
       imagen='imgTypescript'></GoogleTecnologias>
      </div>
       <GoogleTestimonio
        nombre = "Jeremy"
        edad ={42}
        cargo = "Manager"
        imagen = 'Imagen1'
        testimonio='Como gerente de nuestra compañía y cliente de FEST, no puedo estar más satisfecho con los servicios de Front End que hemos recibido, sin duda el equipo de Front End Solutions Technologies desde el inicio del proyecto hasta su implementación, ha demostrado un alto nivel de profesionalismo y experiencia en el desarrollo de interfaces de usuario.
        El enfoque centrado en el cliente y la comprensión profunda de nuestras necesidades han sido clave para el éxito de este proyecto. El equipo no solo logró traducir nuestras ideas en una interfaz atractiva y funcional, sino que también brindaron sugerencias valiosas para mejorar la experiencia del usuario y la eficiencia operativa.'
       ></GoogleTestimonio>
       <GoogleTestimonio
        nombre = "Jeremy"
        edad ={35}
        cargo = "Team Lead"
        imagen = 'Imagen2'
        testimonio='¡Estoy impresionado con los servicios de Front End que he recibido de FEST (Front End Solutions Technologies), su equipo ha transformado por completo nuestra experiencia en línea. Desde la primera consulta hasta la entrega final, la solución que desarrollaron para nuestra interfaz de usuario es simplemente excepcional. No solo lograron mejorar la apariencia visual de nuestro sitio web, sino que también optimizaron la funcionalidad y la usabilidad de manera significativa. Ahora, nuestros clientes pueden navegar por nuestro sitio con facilidad y disfrutar de una experiencia fluida y agradable.'
       ></GoogleTestimonio>
       <GoogleTestimonio
        nombre = "Jennnifer"
        edad ={28}
        cargo = "Front End Developer"
        imagen = "Imagen3"
        testimonio='La comunicación fluida y la transparencia en todo el proceso nos mantuvieron informados y nos brindaron la confianza de que el proyecto se completaría a tiempo y dentro del presupuesto acordado. Además, la capacidad del equipo para adaptarse a nuestros cambios de último minuto y sus rápidas respuestas a nuestras consultas fueron realmente impresionantes.Recomendaría sin reservas los servicios de FEST a cualquier empresa que busque mejorar su presencia en línea y ofrecer una experiencia excepcional a sus usuarios.'
       ></GoogleTestimonio>
       <GoogleBeneficios></GoogleBeneficios>
       <GoogleFormulario></GoogleFormulario>

      </header>
    </div>
    
  );
}

export default App;

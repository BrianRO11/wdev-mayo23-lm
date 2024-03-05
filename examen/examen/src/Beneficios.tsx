import React from "react";
import './Beneficios.css';

interface BeneficioProps {
    titulo: string;
    descripcion: string;
}

const BeneficioItem: React.FC<BeneficioProps> = ({ titulo, descripcion }) => {
    return (
        <li>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
        </li>
    );
}

const GoogleBeneficios: React.FC = () => {
    return (
        <div className="Bcontenedor">
            <div className="Btexto">
                <h1>Beneficios de Google</h1>
                <ul>
                    <BeneficioItem
                        titulo="Acceso a la información"
                        descripcion="Google ha democratizado el acceso a la información al permitir a las personas buscar y encontrar información en línea de manera rápida y eficiente."
                    />
                    <BeneficioItem
                        titulo="Herramientas de productividad"
                        descripcion="Google ofrece una variedad de herramientas de productividad gratuitas, como Google Docs, Sheets y Slides, que permiten a las personas colaborar y trabajar juntas de manera eficiente."
                    />
                    <BeneficioItem
                        titulo="Plataforma de publicidad"
                        descripcion="Google Ads proporciona una plataforma de publicidad en línea que permite a las empresas llegar a su audiencia objetivo de manera efectiva y medir el rendimiento de sus campañas publicitarias"
                    />
                    <BeneficioItem
                        titulo="Mapas y navegación"
                        descripcion="Google Maps ofrece una herramienta de navegación y mapas en línea que ayuda a las personas a encontrar direcciones, explorar lugares y planificar rutas de viaje."
                    />
                    <BeneficioItem
                        titulo="Educación"
                        descripcion="Google ofrece una variedad de herramientas educativas gratuitas, como Google Classroom, que ayudan a los educadores a enseñar y a los estudiantes a aprender de manera más efectiva."
                    />
                    <BeneficioItem
                        titulo="Innovación tecnológica"
                        descripcion="Google ha sido pionero en una serie de tecnologías innovadoras, como el motor de búsqueda, el sistema operativo Android, el navegador Chrome, la inteligencia artificial y la computación en la nube."
                    />
                </ul>
            </div>
        </div>
    );
}

export default GoogleBeneficios;

import React from 'react';
import { Download } from 'lucide-react'; // Icono para el botón de descarga

const About = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Contenedor de la foto */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 md:mb-0 md:mr-8">
          <img
            src="/JhonnyTorres.jpeg" // Cambia esta ruta por la correcta
            alt="Foto de Jhonny Torres"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido de texto y botón */}
        <div className="text-center md:text-left">
          {/* Nombre */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Soy Jhonny Torres
          </h1>

          {/* Título */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Desarrollador JavaScript full stack
            <span className="block md:inline"> con pasión por el código limpio.</span>
          </p>

          {/* Botón de Descarga */}
          <a
            href="/ruta-de-tu-cv.pdf" // Cambia esta ruta por la correcta
            download
            className="inline-flex items-center bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-6 py-3 rounded-full transition-colors duration-300"
          >
            <Download className="mr-2" size={18} />
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
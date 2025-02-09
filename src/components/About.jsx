import React from 'react';
import { Download } from 'lucide-react'; // Icono para el botón de descarga

const About = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Contenedor de las fotos */}
        <div className="relative w-64 h-48 md:w-80 md:h-80 rounded-full overflow-hidden mb-8 md:mb-0 md:mr-8 -ml-8">
          {/* Primera imagen */}
          <img
            src="/blob.svg" // Cambia esta ruta por la correcta
            alt="Foto de Jhonny Torres"
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
          />
          {/* Segunda imagen */}
          <img
            src="/blob (1).svg" // Cambia esta ruta por la correcta
            alt="Segunda imagen"
            className="w-full h-full object-cover absolute top-0 left-0 z-10 transform scale-110 -translate-x-4 translate-y-18" // Movemos la segunda imagen a la izquierda
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
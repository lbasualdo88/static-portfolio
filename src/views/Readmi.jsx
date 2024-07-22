import React from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import usePortafolio from "../hooks/usePortafolio";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Readmi() {
  const { id } = useParams();
  const { proyectos } = usePortafolio();

  // Encontrar el proyecto por ID
  const proyecto = proyectos.find(proyecto => proyecto.id === parseInt(id));
  
  // Preparar las imágenes para react-image-gallery
  const images = proyecto.imagenes.map(imagen => ({
    original: `/public/${imagen.image_path}`,
    thumbnail: `/public/${imagen.image_path}`,
    description: imagen.description  // Opcional: agregar descripción si existe
  }));
  
  

  return (
    <>
      <section className="contenedor shadow-custom p-8 rounded-lg max-w-4xl m-auto mt-10 md:mt-28 flex flex-col items-center gap-8">
        <div className="w-full">
          <div className='flex flex-col'>
            <h2 className="text-center font-bold uppercase text-4xl text-color8 py-4 md:py-2">{proyecto.title}</h2>
            <span className="text-center text-3xl text-color8 justify-center py-2">{proyecto.categoria}</span>  
            <span className="text-center text-2xl text-color5 justify-center py-2">{proyecto.tipo}</span>  
            <p className="p-8" dangerouslySetInnerHTML={{ __html: proyecto.description }}></p>
          </div>
          <div className="icon-container">
            {proyecto.iconos.map((icono,index) => (
              <img
                key={index}
                className="icon-style" 
                src={`/public/${icono.icon_path}`} 
                alt={icono.name}
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <a 
              className="boton border-2 border-solid border-color7 bg-color1 hover:bg-color7 hover:text-color1 text-color7"
              href={proyecto.repository_url}
            >
              Repo
            </a>
            {proyecto.repository2_url ? (
              <a 
                className="boton border-2 border-solid border-color7 bg-color1 hover:bg-color7 hover:text-color1 text-color7"
                href="/"
              >
                Repo
              </a>
            ) : null}
            <a 
              className="boton border-2 border-solid border-color7 bg-color1 hover:bg-color7 hover:text-color1 text-color7"
              href={proyecto.deployed_url}
            >
              Deploy
            </a>
          </div>
        </div>

        <div className="my-8">
          <ImageGallery items={images} />
        </div>
      </section>
    </>
  );
}

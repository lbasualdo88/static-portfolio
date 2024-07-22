import { createContext, useState, useEffect } from 'react';
import apiIconProject from '../api/api-icon-project';
import apiIcon from '../api/api-icon';
import apiImagen from '../api/api-imagen';
import apiImageProject from '../api/api-image-project';
import apiProject from '../api/api-project';


const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [iconos, setIconos] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [iconosProyecto, setIconosProyecto] = useState([]);
  const [imagenesProyecto, setImagenesProyecto] = useState([]);
  const [proyectosConDatos, setProyectosConDatos] = useState([]);

  const obtenerIconos = () => {
    try {
      const data = apiIcon;
      setIconos(data);
      
    } catch (error) {
      console.error(error);
    }
  };
  
  const obtenerImagenes = () => {
    try {
      const data = apiImagen;
      setImagenes(data);
      
    } catch (error) {
      console.error(error);
    }
  };
  
  const obtenerIconosProyecto = () => {
    try {
      const data = apiIconProject;
      setIconosProyecto(data);
      
    } catch (error) {
      console.error(error);
    }
  };
  
  const obtenerImagenesProyecto = () => {
    try {
      const data = apiImageProject;
      setImagenesProyecto(data);
      
    } catch (error) {
      console.error(error);
    }
  };
  
  const obtenerProyectos = () => {
    try {
      const data = apiProject;
      setProyectos(data);
      
    } catch (error) {
      console.error(error);
    }
  };


 
 
  useEffect(() => {
    obtenerIconos();
    obtenerImagenes();
    obtenerIconosProyecto();
    obtenerImagenesProyecto();
    obtenerProyectos();
  }, []);

  useEffect(() => {
    if (proyectos.length && iconos.length && iconosProyecto.length && imagenes.length && imagenesProyecto.length) {
      
      const proyectosConDatos = proyectos.map(proyecto => {

        const iconosIds = iconosProyecto
          .filter(ip => ip.project_id === proyecto.id)
          .map(ip => ip.icon_id);

        const proyectoIconos = iconos.filter(icono => iconosIds.includes(icono.id));

        const imagenesIds = imagenesProyecto
          .filter(ip => ip.project_id === proyecto.id)
          .map(ip => ip.image_id);

        const proyectoImagenes = imagenes.filter(imagen => imagenesIds.includes(imagen.id));

        return {
          ...proyecto,
          iconos: proyectoIconos,
          imagenes: proyectoImagenes,
        };
      });
      setProyectosConDatos(proyectosConDatos);
    }
  }, [proyectos, iconos, iconosProyecto, imagenes, imagenesProyecto]);

  return (
    <PortfolioContext.Provider
      value={{
        proyectos: proyectosConDatos,
        setProyectos,
        iconos,
        setIconos,
        iconosProyecto,
        setIconosProyecto,
        imagenes,
        setImagenes,
        imagenesProyecto,
        setImagenesProyecto,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioProvider };
export default PortfolioContext;

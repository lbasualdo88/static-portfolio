import { Link } from 'react-router-dom';
import usePortafolio from "../hooks/usePortafolio"
export default function Proyecto({proyecto}) {


    const imagePath = proyecto.imagenes[0].image_path;
  
  return (
    <>
        <section  className="contenedor shadow-custom p-8 rounded-lg max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:grid md:grid-cols-2 items-center gap-8">
                <div className="w-full">
                    <img 
                      className="w-full h-full"
                      src={imagePath}
                      alt="imagen proyecto" 
                      />
                </div>
                <div className="w-full flex flex-col">
                    <h2 className="text-center font-bold uppercase text-4xl text-color8">{proyecto.title}</h2>
                    <span className="text-center text-3xl text-color8 justify-center">{proyecto.categoria}</span>  
                    <span className="text-center text-2xl text-color5 justify-center">{proyecto.tipo}</span>  
                    <div className="md:icon-container flex flex-wrap justify-center gap-1">
                  {proyecto.iconos.map((icono,index)=>{
                   
                    return (
                        <img
                          key={index}
                          className="icon-style" 
                          src={icono.icon_path} 
                          alt={icono.name} />
                        )
                      })}  
                      </div>
                    <div className="flex clex-col md:flex-row gap-4">
                      <a 
                        className="boton border-2 border-solid border-color7 bg-color1 hover:bg-color7 hover:text-color1 text-color7"
                        href={proyecto.repository_url}>Repo</a>
                        {proyecto.repository2_url ? (
                          <a 
                          className="boton border-2 border-solid border-color7 bg-color1 hover:bg-color7 hover:text-color1 text-color7"
                          href="/">Repo</a>
                        ) : null}
                      <a 
                        className="boton border-2 border-solid border-color7 bg-color1 hover:bg-color7 hover:text-color1 text-color7"
                        href={proyecto.deployed_url}>Deploy</a>
                      <Link 
                        className="boton border-2 border-solid border-color7 bg-color1 hover:bg-color7 hover:text-color1 text-color7"
                        to={`/proyecto/readmi/${proyecto.id}`}>Readmi</Link>
                        
                    </div>
                </div>
              </section>
    </>
  )
}

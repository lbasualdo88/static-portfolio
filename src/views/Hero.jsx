import { FaFilePdf } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
         <section className="bg-color1 py-8 mb-4">      
            <div className="md:w-auto flex flex-col md:flex-row-reverse md:justify-between lg:flex-row-reverse lg:justify-between lg:items-center m-auto px-8 lg:px-52 gap-4"> 
                <img 
                  className="w-40 h-40 sm:w-60 sm:h-60 lg:fotoPerfil rounded-full" 
                  src="/public/img/perfil/fotolinkedin2.JPG" 
                  alt="Imagen perfil"
                />
              <div className="">
                <h2 className="font-Raleway text-5xl sm:text-6xl lg:text-8xl text-color8 ">
                  Hola, mi nombre es Leonardo <br></br> y soy programador Full Stack
                </h2>
                <ul className="flex my-8 py-8 gap-8">
                    <li className="flex flex-row-reverse items-center gap-1">
                      <a className="text-2xl md:text-3xl" href="https://github.com/lbasualdo88">Github </a>
                        <img 
                          className="w-12 h-auto" 
                          src="/public/img/iconos/github.png"
                        /> 
                    </li>
                    <li className="flex flex-row-reverse items-center gap-1">
                      <a className="text-2xl md:text-3xl" href="https://www.linkedin.com/in/leonardo-javier-basualdo-/">Linkedin</a> 
                        <img 
                          className="w-12 h-auto" 
                          src="/public/img/iconos/linkedin.png"
                        />
                    </li>
                    <li className="flex flex-row-reverse items-center gap-1">
                      <a className="text-2xl md:text-3xl" href="mailto:lbasualdo88@gmail.com">Email</a> 
                        <img 
                          className="w-12 h-auto" 
                          src="/public/img/iconos/gmail.svg"
                        />
                    </li>
                    <li className="flex flex-row-reverse items-center gap-1">
                      <a className="text-2xl md:text-3xl" href="/public/Doc/Leonardo Basualdo CV_240415_091705 (1).pdf" download="">Currículum</a> 
                      <FaFilePdf 
                        className="w-10 h-auto text-red-600" 
                      />
                    </li>
                </ul>
              </div>
              
              
                
           </div>    
        </section>
    
    </>
  )
}



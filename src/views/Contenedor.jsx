import { Link } from 'react-router-dom';
import UltimosProyectos from "./UltimosProyectos"
import usePortafolio from '../hooks/usePortafolio';

function shuffleArray(array) {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function Contenedor() {
  const { proyectos } = usePortafolio();

  const shuffledArray1 = shuffleArray(proyectos);
  const shuffledArray2 = shuffleArray(proyectos);
  const shuffledArray3 = shuffleArray(proyectos);
  
  return (
    <>
        <section id="contenedor" className=" bg-color1 p-8 mt-8 mb-8 rounded-lg overflow ">
            <h2 className="text-color8 font-Raleway  text-6xl m-4 text-center">Ultimos Proyectos</h2>
            <UltimosProyectos direction="left" speed={100000} proyectos={shuffledArray1}/>
            <UltimosProyectos direction="right" speed={60000} proyectos={shuffledArray2}/>
            <UltimosProyectos direction="left" speed={10000} proyectos={shuffledArray3}/>

            <Link
            className="flex justify-center items-center font-Raleway py-4 rounded-xl text-4xl border-2 border-solid border-color7 text-color7 md:w-60 w-auto hover:pointer m-auto hover:text-color1 hover:bg-color7" 
            to="/proyectos"
        >Ver mas</Link>
        </section>
    </>
  )
}

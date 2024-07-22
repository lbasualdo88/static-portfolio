import { Link } from "react-router-dom"

export default function Pagina404() {
  return (
    <>
    <main className="w-full h-full p-20 bg-color1">
        <p className='text-center py-4 text-4xl'>Esta pagina no existe</p>
        <div className='flex flex-col justify-center'>
            <img 
            src="/public/img/404/404.jpeg" 
            alt="imagen 404" 
            className="contenedor"
            />
        <Link className='text-3xl text-color5 bg-color9 hover:bg-color7 hover:text-color9 px-8 py-2 rounded-xl uppercase font-bold mx-auto my-8' to="/">Volver</Link>
        </div>
    </main>
    </>
  )
}

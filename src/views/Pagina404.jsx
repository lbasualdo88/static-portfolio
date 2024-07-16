import { Link } from "react-router-dom"

export default function Pagina404() {
  return (
    <>
    <main className="w-full h-full p-20">
        <p className='text-center pt-4 text-4xl'>Esta pagina no existe</p>
        <div className='flex flex-col justify-center'>
            <img 
            src="/public/img/404/404.jpeg" 
            alt="imagen 404" 
            className="contenedor"
            />
        <Link className='text-3xl text-color6 bg-color4 hover:bg-color3 px-8 py-2 rounded-xl uppercase font-bold m-auto' to="/">Volver</Link>
        </div>
    </main>
    </>
  )
}

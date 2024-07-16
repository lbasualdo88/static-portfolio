import { Outlet, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'


export default function Admin() {

    const { logout } = useAuth()

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.error('Error al cerrar sesión:', error)
        }
    }

  return (
    <>
 
        <div className="flex flex-col md:flex-row md:justify-between mt-8 items-center w-auto">
            <Link to="/admin">        
                <h1 className="text-6xl text-color8 font-semibold text-center m-4">Developer
                    <span className="text-3xl text-color5">Full Stack</span> 
                </h1>
            </Link>
            <div className=" mr-8" >
                <nav className="flex flex-col md:flex-row contenedor md:gap-20 mb-1">
                    <Link
                    className="hover:text-color3 text-color4 no-underline gap-4 text-3xl font-bold p-4 text-center border-2 border-color1 rounded-lg hover:border-indigo-600" 
                    to="/admin"> Mis Proyectos</Link>
                    <Link
                    className="hover:text-color3 text-color4 no-underline gap-4 text-3xl font-bold p-4 text-center border-2 border-color1 rounded-lg hover:border-indigo-600" 
                    to="./registroProyecto">Crear Proyecto</Link>
                    <button
                    onClick={handleLogout}
                    className="text-color1 bg-color4 hover:bg-color3 no-underline gap-4 text-3xl font-bold p-4 text-center border-2 border-color1 rounded-lg" 
                    >Cerrar Sesion</button>
                </nav>
            </div>
        </div>  
    
        <Outlet />
    
    </>
  )
}

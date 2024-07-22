import { Link, useLocation, useParams } from 'react-router-dom';

export default function HeaderProyectos() {
    const { id } = useParams();
    const location = useLocation();

    return (
        <div className="header flex md:flex-row justify-between items-center p-4">
            <div className=''>
              <a className='flex items-center cursor-pointer' href="/">
                <img
                    className='w-10 h-10 mr-4'
                    src="/img//iconos/estrellas.png"
                    alt="logo"
                />
                <h3 className="text-4xl font-Raleway">Leonardo Javier Basualdo</h3>
              </a>
            </div>

            <button className='hover:bg-color9 hover:rounded-3xl p-4 text-color8 no-underline text-3xl mr-8'>
                <Link to={location.pathname === `/proyecto/readmi/${id}` ? '/proyectos' : '/'}>
                    Volver
                </Link>
            </button>
        </div>
    );
}

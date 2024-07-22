import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Inicio from './views/Inicio'
import Proyectos from './views/Proyectos'
import Readmi from './views/Readmi'
import Pagina404 from './views/Pagina404'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />
            },
            {
                path: '/proyectos',
                element: <Proyectos />
            },
            {
                path: '/proyecto/readmi/:id',
                element: <Readmi />
            },
            {
                path: '/*',
                element: <Pagina404 />,
            }
        ]       
    },
 
  
])

export default router
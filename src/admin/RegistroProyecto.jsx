import { createRef, useState } from "react"
import clienteAxios from '../config/axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function RegistroProyecto() {

    const navigate = useNavigate();

    const tituloRef = createRef();
    const descripcionRef = createRef();
    const tipoRef = createRef();
    const categoriaRef = createRef();
    const repo_1Ref = createRef();
    const repo_2Ref = createRef();
    const deployRef = createRef();
    

    const [reposSeparados, setReposSeparados] = useState(false);
    const [iconos, setIconos] = useState({
        HTML: false,
        CSS: false,
        Laravel: false,
        PHP: false,
        JavaScript: false,
        React: false,
        Composer: false,
        Tailwind: false,
        StyledComponent: false,
        SASS: false,
        NodeJS: false,
        Gulp: false,
        GitHub: false,
        Figma: false,
        MySQL: false,
      });
      const [fotos, setFotos] = useState([]);

    const handleReposChange = (event) => {
      setReposSeparados(event.target.value === 'Si');
    };

    const handleIconChange = (event) => {
        const { name, checked } = event.target;
        setIconos(prevState => ({
          ...prevState,
          [name]: checked,
        }));
      };

      const handleFotosChange = (event) => {
        const files = Array.from(event.target.files);
        setFotos((prevFotos) => [...prevFotos, ...files]);
      };
    
      const handleRemoveFoto = (index) => {
        setFotos((prevFotos) => prevFotos.filter((_, i) => i !== index));
      };

      const handleSubmit = async e => {
        e.preventDefault();

        //filtrar imagenes   
        const imagenesSeleccionadas = fotos.map(foto => foto.name);
        // Filtrar iconos seleccionados
        const iconosSeleccionados = Object.keys(iconos).filter(icono => iconos[icono]);

        const datos = {
          title: tituloRef.current.value,
          description: descripcionRef.current.value,
          tipo: tipoRef.current.value,
          categoria: categoriaRef.current.value,
          repository_url: repo_1Ref.current.value,
          repository2_url: reposSeparados ? repo_2Ref.current.value : null,
          deployed_url: deployRef.current.value,
          icons: iconosSeleccionados,
          images: imagenesSeleccionadas
        };
        registro(datos);
      };
      const registro = async (datos) => {
        const token = localStorage.getItem('AUTH_TOKEN'); 
        try {
            const { data } = await clienteAxios.post('/api/nuevoProject', datos, {
                headers: {
                    Authorization: `Bearer ${token}`, // Incluir el token en los encabezados
                },
            });
            Swal.fire({
                icon: 'success',
                title: 'Proyecto registrado con éxito',
                showConfirmButton: false,
                timer: 3500
              });
            navigate('/admin');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al registrar el proyecto',
                text: 'Por favor, intenta de nuevo más tarde',
                confirmButtonText: 'Entendido'
              });
            console.error('Error creating project:', error);
            
        }

      }

      
      
  return (
    <>
         <main className="max-w-4xl m-auto mt-10 md:mt-28 items-center md:mb-12" >
            <h1 className="text-6xl text-color8 font-bold text-center">Ingresar Proyecto</h1>
            

            <div className="bg-gradient-to-b from-color6 to-color9 shadow-md rounded-md mt-10 px-5 py-10">
                <form
                    onSubmit={handleSubmit}
                    noValidate
                >
 
                    <div className="mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="titulo"
                        >Titulo:</label>
                        <input 
                            type="text" 
                            id="email"
                            className="mt-2 w-full p-3 bg-gray-50 rounded-md"
                            name="titulo"
                            placeholder="Titulo del Proyecto"
                            ref={tituloRef}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="description"
                        >Descripcion:</label>
                        <textarea 
                            type="text" 
                            id="description"
                            className="mt-2 w-full p-3 bg-gray-50 rounded-md"
                            name="description"
                            placeholder="Description"
                            ref={descripcionRef}
                        />
                    </div>

                    <div className="mb-4">
                      <label className="block mb-2 text-2xl text-slate-800">
                        Tipo de Proyecto:</label>
                      <select className="border-gray-300 p-2 w-full rounded-md" ref={tipoRef}>
                          <option>--Seleccione--</option>
                              <option>Academicos</option>
                              <option>Propios</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block mb-2 text-2xl text-slate-800 ">
                        Categoria:</label>
                      <select className="border-gray-300 p-2 w-full rounded-md" ref={categoriaRef}>
                          <option>--Seleccione--</option>
                              <option>Full Stack</option>
                              <option>Back End</option>
                              <option>Front End</option>                       
                      </select>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-2xl text-slate-800">Iconos:</label>
                        <div className="flex flex-wrap">
                            {Object.keys(iconos).map((icono) => (
                                <div key={icono} className="flex items-center mb-2 w-1/2">
                                    <input
                                        type="checkbox"
                                        id={icono}
                                        name={icono}
                                        checked={iconos[icono]}
                                        onChange={handleIconChange}
                                        className="mr-2 rounded-md"
                                    />
                                    <label htmlFor={icono} className="text-slate-800">{icono}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-2xl text-slate-800 ">
                        Repositorios Separados?:</label>
                      <select className="border-gray-300 p-2 w-full rounded-md" onChange={handleReposChange}>
                          <option>--Seleccione--</option>
                              <option>Si</option>
                              <option>No</option>                      
                      </select>
                    </div>
                    
                    <div className="mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="repositorio"
                        >Repo (Todo o Back):</label>
                        <input 
                            type="text" 
                            id="repo_1"
                            className="mt-2 w-full p-3 bg-gray-50 rounded-md"
                            name="repo_1"
                            placeholder="Repositorio del Proyecto"
                            ref={repo_1Ref}
                        />
                    </div>
                    {reposSeparados && (
                        <div className="mb-4">
                            <label className="text-slate-800" htmlFor="otroRepositorio">Repo (Front):</label>
                            <input
                            type="text"
                            id="repo_2"
                            className="mt-2 w-full p-3 bg-gray-50 rounded-md"
                            name="repo_2"
                            placeholder="Otro Repositorio del Proyecto"
                            ref={repo_2Ref}
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="repositorio"
                        >Deploy:</label>
                        <input 
                            type="text" 
                            id="deploy"
                            className="mt-2 w-full p-3 bg-gray-50 rounded-md"
                            name="deploy"
                            placeholder="URL del Proyecto"
                            ref={deployRef}
                        />
                    </div>  
                    <div className="mb-4">
                        <label className="block mb-2 text-2xl text-slate-800" htmlFor="fotos">Fotos:</label>
                        <input
                            type="file"
                            id="fotos"
                            name="fotos"
                            accept="image/*"
                            multiple
                            onChange={handleFotosChange}
                            className="mt-2 w-full p-3 bg-gray-50 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        {fotos.length > 0 && (
                            <div>
                            <h3 className="text-slate-800">Vista previa de las fotos:</h3>
                                <div className="flex flex-wrap mt-2">
                                    {fotos.map((foto, index) => (
                                        <div key={index} className="w-1/2 p-1 relative">
                                            <img
                                            src={URL.createObjectURL(foto)}
                                            alt={`Preview ${index}`}
                                            className="w-full h-auto rounded-md shadow-sm"
                                            />
                                            <button
                                            type="button"
                                            onClick={() => handleRemoveFoto(index)}
                                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center m-2"
                                            >
                                            X
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
        
                    <input
                        type="submit"
                        value="Subir Proyecto"
                        className="bg-color4 hover:bg-color3 hover:text-color1 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-md"
                    />
                </form>
            </div>
    </main>
    
    </>
  )
}

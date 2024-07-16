import usePortafolio from "../hooks/usePortafolio"

export default function ProyectosAdmin() {

    const { proyectos } = usePortafolio()

  return (
    <>
    <div className="bg-gray-200 p-8  flex flex-col h-full">
        <div className="w-auto  p-8">
            <h1 className="text-center text-bold font-krub text-color8 uppercase text-4xl">Mis Proyectos</h1>
        </div>
        <div className="mb-8 pb-8 space-y-8">
            {proyectos.map((proyecto, index) => {
                return (
                    <section key={index}  className="contenedor m-8 p-8 shadow-custom bg-color1 rounded-lg">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex flex-col">
                                <h2 className="font-bold text-3xl text-color8">{proyecto.title}</h2>
                                <span className="text-2xl text-color5">{proyecto.categoria}</span>              
                            </div>
                            <div className="flex gap-4">
                                <a className="text-2xl font-bold py-3 px-8 rounded-xl uppercase bg-green-600 text-color1" href="#">Editar</a>
                                <button className="text-2xl font-bold py-3 px-8 rounded-xl uppercase bg-red-700 text-color1">Eliminar</button>
                            </div>
                        </div>
                    </section>
                )
            })}
        </div>
    </div>
    </>
  )
}

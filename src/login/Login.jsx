import { createRef, useState } from 'react'
import Alerta from '../components/Alerta'
import { useAuth } from '../hooks/useAuth'

export default function Login() {
    const emailRef = createRef()
    const passwordRef = createRef()
    const [errores, setErrores] = useState([])
    const { login } = useAuth()

    const handleSubmit = async e => {
        e.preventDefault()

        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        await login(datos, setErrores)
        
    }

    return (
        <main className="max-w-4xl m-auto mt-10 md:mt-28 items-center">
            <h1 className="text-6xl text-color8 font-bold text-center">Iniciar Sesión</h1>
            <p className="text-3xl text-center text-color5">Administración</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form onSubmit={handleSubmit} noValidate>
                    {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}

                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="email"
                            placeholder="Tu Email"
                            ref={emailRef}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password"
                            placeholder="Tu Password"
                            ref={passwordRef}
                        />
                    </div>

                    <input
                        type='submit'
                        value="Iniciar Sesión"
                        className="bg-color4 hover:bg-color3 hover:text-color1 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    />
                </form>
            </div>
        </main>
    )
}

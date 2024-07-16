

export default function Contacto() {
  return (
    <>
         <section className="" id="contacto">
                    <h2 className="font-Raleway text-6xl text-color8 text-center py-8">Contacto</h2>
            <div  className="flex flex-col md:grid md:grid-cols-2 m-auto p-auto gap-1">
                <div className="flex p-8 m-8 items-end">
                    <img className="max-w-4xl " src="/public/img/contacto.jpg"/>
                </div>
                <div className="m-8 p-8">
                    <h3 className="">¿Quieres contactarme?</h3>
                    <h3 className="">Complete el siguiente formulario y me pondré en contacto con usted lo antes posible. </h3>
                    <form className="" name="form">
                        <div className="">
                            <input className="" type="text" name="nombre" placeholder="Nombre" required data-tipo="nombre"/>
                            <span className=""></span>
                        </div>
                        <div className="campo">
                            <input className="" type="email" name="email" placeholder="E-mail" required data-tipo="email"/>
                            <span className=""></span>
                        </div>
                        <div className="campo">
                            <input className="" type="text" name="asunto" placeholder="Asunto" required data-tipo="asunto"/>
                            <span className=""></span>
                        </div>
                        <div className="campo">
                            <textarea className="" rows="5" cols="40" id="mensagem" name="mensaje" placeholder="Mensaje" required data-tipo="textarea"></textarea>
                            <span className=""></span>
                        </div>
                           
                           
            
                        <button type="submit" className="">Enviar mensaje</button>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

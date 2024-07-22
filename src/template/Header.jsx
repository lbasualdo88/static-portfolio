import { useEffect } from 'react';



export default function Header() {


  

  useEffect(() => {
    function scrollNav() {
      const enlaceSobreMi = document.querySelectorAll('.scroll');
      enlaceSobreMi.forEach(element => {
        element.addEventListener('click', (e) => {
          e.preventDefault();
          const valorId_1 = e.target.getAttribute('href');
          const form_1 = document.querySelector(valorId_1);
          if (form_1) {
            form_1.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }

    scrollNav();
  }, []);

  function handleClick() {
    const nav = document.querySelector('.nav');
    const h = document.querySelector('.header');

    if (nav.classList.contains('mostrar')) {
      nav.classList.remove('mostrar');
      h.classList.remove('flexColMenu');
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
      h.classList.add('flexColMenu');
      nav.classList.add('mostrar');
    }
  }


  return (
    <div className="header flex md:flex-row justify-between items-center p-4">
      <div className=''>
      <a className='flex items-center cursor-pointer' href="/">
                <img
                    className='w-10 h-10 mr-4'
                    src="/img/iconos/estrellas.png"
                    alt="logo"
                />
                <h3 className="text-4xl font-Raleway">Leonardo Javier Basualdo</h3>
        </a>
      </div>
        
          <button onClick={handleClick} className='md:hidden'>
            <img 
              className='md:hidden w-16 p-auto mr-3 cursor-pointer'
              src="/public/img/iconos/menu-01-stroke-rounded.svg" 
              alt="icono menu"
            />
          </button>
          <nav className="nav hidden md:flex md:flex-row items-center gap-4 p-4">
            <a
              className="scroll hover:bg-color9 hover:rounded-xl p-4 text-color8 no-underline text-3xl"
              href="#contenedor"
            >
              Proyectos
            </a>
            <a
              className="scroll hover:bg-color9 hover:rounded-xl p-4 text-color8 no-underline text-3xl"
              href="#sobremi"
            >
              Sobre Mi
            </a>
            <a
              className="scroll hover:bg-color9 hover:rounded-xl p-4 text-color8 no-underline text-3xl"
              href="#educacion"
            >
              Educación
            </a>
            <a
              className="scroll hover:bg-color9 hover:rounded-xl p-4 text-color8 no-underline text-3xl"
              href="#skill"
            >
              Skill
            </a>
           
          </nav>
        
      
    </div>
  );
}

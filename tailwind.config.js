/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#ffffff',
        color2: '#F5F5F5',
        color3: '#3730a3',
        color4: '#4f46e5',
        color5: '#757575',
        color6: '#DFE9F3',
        color7: '#2A7AE4',
        color8: '#464646',
        color9: '#EAF2FD',
        color10: '#000000'
      },
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif'],
      },
      maxWidth: {
        '120rem': '120rem',
      },
      width: {
        '1200': '1250px',
      },
      height: {
        '450px': '450px',
        '20rem': '20rem',
      },
      boxShadow: {
        'custom': '0px 5px 15px 0px rgba(112, 112, 112, 0.48)',
      },
    },
  },
  plugins: [
    function({ addBase, addUtilities }) {
      addBase({
        html: {
          fontSize: '62.5%', // 1rem = 10px
          boxSizing: 'border-box',
          scrollSnapType: 'y mandatory',
        },
        '*, *::before, *::after': {
          boxSizing: 'inherit',
        },
        body: {
          fontSize: '1.6rem', // 1rem = 16px
          fontFamily: 'Krub, sans-serif',
        },
      });

      const newUtilities = {
        '.fijo': {
          position: 'fixed',
          top: '0',
          width: '100%',
          zIndex: '1000',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(5px)',
          fontSize: '12px',
          height: '24px',
        },
        '.body-scroll': {
          paddingTop: '24px',
        },
        '.fotoPerfil': {
          height: '400px',
          width: '400px',
        },
        '.icon-style': {
          maxHeight: '50px',
          display: 'flex',
          alignItems: 'center',
        },
        '.icon-container': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          margin: '2rem',
          gap: '1rem',
        },
        '.contenedor': {
          'max-width': '120rem',
          margin:' 0 auto 0 auto',
        },
        '.mostrar': {
          visibility: 'visible',
          opacity: '1',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
        },
        '.flexColMenu': {
          display: 'flex',
          flexDirection: 'column',
        },
        '.boton': {
          padding: '.5rem 1rem',
          'margin-top': '1rem',
          fontSize: '2rem',
          'text-decoration': 'none',
         'text-transform': 'uppercase',
          'font-weight': 'bold',
          'border-radius': '.5rem',
          width: '90%',
          'text-align': 'center',
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}


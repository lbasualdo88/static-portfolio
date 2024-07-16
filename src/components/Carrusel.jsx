import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import usePortafolio from '../hooks/usePortafolio';

const Carousel = () => {
  const { iconos } = usePortafolio();
  const controls = useAnimation();
  const carouselRef = useRef();

  iconos.concat(iconos).map((icon, index) =>{
    console.log(icon)
  }),

  useEffect(() => {
    const totalWidth = carouselRef.current.scrollWidth / 2;
    const animateCarousel = async () => {
      await controls.start({
        x: [0, -totalWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25, // Ajusta la duración según tus necesidades
            ease: 'linear',
          },
        },
      });
    };

    animateCarousel();
  }, [controls]);

  return (
    <>
    <div className="overflow-hidden whitespace-nowrap flex" ref={carouselRef}>
      <motion.div
        animate={controls}
        className="flex"
      >
        {iconos.concat(iconos).map((icon, index) => (
           
          <div key={index} className="flex-none p-2.5">
            <img 
              src={icon.icon_path} 
              alt={`Icon ${index}`} 
              className='icon-style'
            />
          </div>
        ))}
        {iconos.concat(iconos).map((icon, index) => (
          <div key={index} className="flex-none p-2.5">
            <img 
              src={icon.icon_path} 
              alt={`Icon ${index}`} 
              className='icon-style'
            />
          </div>
        ))}
      </motion.div>
    </div>
    </>
  );
};

export default Carousel;

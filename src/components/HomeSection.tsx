'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useScroll, useTransform } from 'framer-motion';
import Logo from '../assets/monkeylord-logo.jpeg';

export default function HomeSection() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']); // Ajuste de rango para mejor efecto parallax

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con efecto parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          y: parallaxY,
          backgroundImage: `url(${Logo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)', // Sutil desenfoque para dar más énfasis al contenido
        }}
      />
      
      {/* Contenido principal sobre la imagen de fondo */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
        >
          Welcome to Monkeylord
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8 text-white"
        >
          Your AI-Powered Automation and Marketing Agency
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Get Started
        </motion.a>
      </div>

      {/* Icono de desplazamiento hacia abajo */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

const processSteps = [
  { step: 1, title: 'Descubrimiento', description: 'Analizamos tus necesidades y objetivos.' },
  { step: 2, title: 'Estrategia', description: 'Desarrollamos un plan personalizado.' },
  { step: 3, title: 'Implementación', description: 'Ejecutamos la estrategia con precisión.' },
  { step: 4, title: 'Optimización', description: 'Mejoramos continuamente los resultados.' }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Así es como trabajamos</h2>
        <div className="flex flex-col md:flex-row justify-between items-start relative">
          {processSteps.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center mb-8 md:mb-0 relative z-10"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                {process.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-xs">{process.description}</p>
            </motion.div>
          ))}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 dark:bg-blue-700 transform -translate-y-1/2 z-0 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}

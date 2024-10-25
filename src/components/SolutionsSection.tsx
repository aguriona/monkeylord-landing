'use client';

import { motion } from 'framer-motion';
import { Zap, Rocket, Target } from 'lucide-react';

const solutions = [
  { title: 'Automatización', icon: Zap },
  { title: 'Marketing Digital', icon: Rocket },
  { title: 'Análisis de Datos', icon: Target }
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Soluciones Personalizadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <solution.icon className="w-12 h-12 text-blue-500" />
                <h3 className="text-xl font-semibold ml-4">{solution.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

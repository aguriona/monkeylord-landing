'use client';

import { motion } from 'framer-motion';
import Logo from '../assets/monkeylord-logo.jpeg';

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">About Monkeylord</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img src={Logo} alt="Monkeylord Logo" className="rounded-full w-64 h-64 object-cover mx-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 md:pl-8"
          >
            <p className="text-lg mb-4">
              Monkeylord is a cutting-edge agency specializing in AI-powered automation and marketing solutions. We help businesses streamline their operations and boost their online presence.
            </p>
            <p className="text-lg">
              Our team of experts combines the latest in artificial intelligence with proven marketing strategies to deliver unparalleled results for our clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

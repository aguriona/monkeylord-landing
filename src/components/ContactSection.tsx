'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

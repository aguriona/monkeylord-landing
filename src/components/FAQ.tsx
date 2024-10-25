import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div layout onClick={toggleOpen} className="cursor-pointer mb-4">
      <motion.h4 layout className="font-bold">
        {question}
      </motion.h4>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-sm max-w-2xl mx-auto"
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

const FAQSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const faqs = [
    {
      question:
        "¿Necesito experiencia previa en organización de eventos para inscribirme?",
      answer:
        "No es necesario tener experiencia previa. Nuestro programa está diseñado para enseñarte desde lo básico hasta técnicas avanzadas de organización de eventos.",
    },
    {
      question: "¿Cuánto tiempo dura la capacitación?",
      answer:
        "La capacitación dura aproximadamente 6 semanas, con flexibilidad para adaptarse a tu ritmo de aprendizaje ya que siempre tendras acceso al material",
    },
    {
      question:
        "¿Qué opciones de avance tengo después de completar la capacitación inicial?",
      answer:
        "Tras finalizar nuestra capacitación básica, ofrecemos cursos avanzados, como los dirigidos por expertos del sector como Remedios Gomis, que profundizan en aspectos específicos de la organización de eventos. Estos cursos complementarios están diseñados para ampliar tus habilidades y mantenerte a la vanguardia del sector.",
    },
    {
      question:
        "¿Qué hace única a la capacitación de Planner Dinner en comparación con otros cursos?",
      answer:
        "Nuestra capacitación se distingue por ser la única en el mercado que combina la enseñanza de técnicas avanzadas de marketing y estrategias prácticas de organización de eventos, todo bajo la guía de profesionales reconocidos en el sector.",
    },
    {
      question:
        "¿Hay oportunidades de trabajo o colaboración después de la capacitación?",
      answer:
        "Sí, frecuentemente colaboramos con nuestros graduados en proyectos y eventos, además de ofrecerles visibilidad dentro de nuestra red.",
    },
    {
      question:
        "Además de la capacitación, ¿ofrece Planner Dinner otros servicios?",
      answer:
        "Sí, para aquellos que buscan una solución más personalizada, ofrecemos servicios de consultoría y marketing adaptados a tus necesidades específicas. Desde la creación de una marca hasta estrategias de promoción eficaces, nuestro equipo está listo para ayudarte a destacar",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Preguntas Frecuentes
        </h2>
        <div className="flex flex-col justify-center items-center">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQSection;

import { motion } from "framer-motion";
import testimonialImage1 from "../assets/testimonial/testimonial-1.jfif";
import testimonialImage2 from "../assets/testimonial/testimonial-2.jpg";
import testimonialImage3 from "../assets/testimonial/testimonial-8.jfif";
import testimonialImage4 from "../assets/testimonial/testimonial-4.jfif";

import Testimonial from "../components/Testimonials";

const TestimonialsSection = () => {
  const items = [
    {
      id: 1,
      imgSrc: testimonialImage3,
      name: "Laura",
      text: "Gracias a First Dinner ahora dirijo una agencia que ha ayudado a decenas a encontrar su pareja ideal. La capacitación me proporcionó las herramientas y lo más importante, la confianza para hacer realidad mi emprendimiento.",
    },
    {
      id: 2,
      imgSrc: testimonialImage2,
      name: "Miguel",
      text: "No solo aprendí sobre el negocio, sino que también descubrí cómo crear eventos inolvidables que realmente conectan a las personas. ",
    },
    /*     {
      id: 3,
      imgSrc: testimonialImage1,
      name: "Joseba",
      text: "Lo que me llevó a Planner Dinner Academy fue la búsqueda de una carrera que combinara mi creatividad con mi deseo de ayudar a otros. Lo que encontré fue una comunidad y un camino hacia el éxito.",
    },
    {
      id: 4,
      imgSrc: testimonialImage4,
      name: "Carlos",
      text: "Planner Dinner Academy me equipó con conocimientos específicos del sector, estrategias de marketing efectivas y el apoyo continuo que necesitaba.",
    }, */
  ];

  return (
    <div className="py-16 bg-gray-100" id="Testimonial">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-[#d2b57f]">Testimonios</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item) => {
            return (
              <Testimonial
                key={item.id}
                id={item.id}
                imgSrc={item.imgSrc}
                name={item.name}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

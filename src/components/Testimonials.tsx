import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Testimonial = ({ imgSrc, name, text, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, scale: 1 },
        hidden: { opacity: 0, y: 50, scale: 0.95 },
      }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center p-4 w-full md:w-1/3"
    >
      <img src={imgSrc} alt="" className="h-24 rounded-full mb-4" />
      <h3 className="text-lg font-bold text-[#d2b57f]">{name}</h3>
      <p>{text}</p>
    </motion.div>
  );
};

export default Testimonial;

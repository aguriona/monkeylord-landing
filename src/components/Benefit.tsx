import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Benefit = ({ animationStart, title, imageSrc }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);


  return (
    <>
      <motion.div
        className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: animationStart },
        }}
        transition={{ duration: 0.8 }}
        >
        <div className="flex items-center mb-6 ">
            <img src={imageSrc} alt="" className='mx-auto max-w-prose max-h-64 rounded-lg border border-gray-300'/>
        </div>
            <h3 className="text-2xl leading-loose text-gray-500 dark:text-gray-200 text-center">
                {title}
        </h3>

      </motion.div>

    </>
  );
};

export default Benefit;
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Navigation, Pagination } from 'swiper/modules';
import image1 from '../assets/imageonline/00.jpeg';

const BenefitsCarousel = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Beneficios</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="text-center">
            <img src={image1} alt="" className="margin-auto"/>
            <h3 className="text-xl font-bold mb-2">Beneficio #1</h3>
            <p>Descripción del beneficio #1.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Beneficio #2</h3>
            <p>Descripción del beneficio #2.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Beneficio #3</h3>
            <p>Descripción del beneficio #3.</p>
          </div>
        </SwiperSlide>
        {/* Añade más SwiperSlide según sea necesario */}
      </Swiper>
    </motion.div>
  );
};

export default BenefitsCarousel;

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const navigate = useNavigate();
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const redirectAction = (e) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_atqxyzo", "template_1", form.current, {
          publicKey: "1Gffik108K5_2aWs-",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            navigate("/gracias");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <motion.div
      id="Contact"
      className="flex flex-col min-h-full py-36 lg:px-24 items-center text-center"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
      transition={{ duration: 0.9 }}
    >
      <div className="mb-6 text-3xl font-extrabold text-center text-gray-800">
        Contactanos !
      </div>
      <div className="mb-6 font-light min-w-full text-center text-gray-800">
        <p className="text-base md:text-lg  px-3">
          Comienza tu aventura con Planner Dinner inscribiéndote en nuestra
          plataforma.
          <br />
          Dejanos tu consulta y te responderemos a la brevedad.
        </p>
      </div>
      <form
        ref={form}
        className="flex w-full max-w-sm space-x-3"
        onSubmit={redirectAction}
      >
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  name="from_name"
                  id="contact-form-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Nombre"
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  name="from_email"
                  id="contact-form-email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="email"
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="text-gray-700">
                <textarea
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  id="message"
                  placeholder="Mensaje"
                  name="message"
                ></textarea>
              </label>
            </div>
            <div className="col-span-2 text-right">
              <button
                type="submit"
                className="py-2 px-4 bg-[#dbc293] hover:bg-[#0e2a3b]  focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;

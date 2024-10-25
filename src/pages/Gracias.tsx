import React from "react";
import Navbar from "../components/Navbar";
import StartButton from "../components/StartButton";

const Gracias = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-6">
        <h1 className="text-center text-4xl sm:text-6xl text-[#d2b57f] font-bold mb-4 lg:px-6">
          Gracias!
        </h1>
        <h2 className="text-center text-3xl font-bold mb-4">
          Recibimos tu mensaje
        </h2>
        <p className="max-w-lg text-center text-xl font-bold mb-6">
          Si deseas saber mas, sera un placer organizar una videollamada
          contigo, asi podremos resolver cualquier inquietud y descubrir si
          podemos ayudarte a conseguir tus metas.
        </p>
        <StartButton text="Agenda una llamada"></StartButton>
      </div>
    </div>
  );
};

export default Gracias;

import React from "react";
import Navbar from "../components/Navbar";
import StartButton from "../components/StartButton";

const Nosotros = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-6">
        <h1 className="text-center text-4xl sm:text-6xl text-[#d2b57f] font-bold mb-4 lg:px-6">
          Nosotros
        </h1>

        <StartButton text="Agenda una llamada"></StartButton>
      </div>
    </div>
  );
};

export default Nosotros;
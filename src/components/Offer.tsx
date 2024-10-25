interface StepType {
  index: number;
  title: string;
  description: string;
}

const Ofer: React.FC<StepType> = ({ index, title, description }) => {
  return (
    <li className="flex flex-col lg:flex-row items-center justify-center lg:p-4 mx-auto cursor-pointer select-none">
      {/* Numero circulo */}
      <div className="px-5 py-3 lg:mr-4 bg-[#d2b57f] shadow-lg shadow-gray-500 rounded-full">
        <span className="lg:w-10 lg:h-10 text-white text-xl font-bold ">
          {index}
        </span>
      </div>
      {/* Columna derecha */}
      <div className="flex-auto max-w-screen-md">
        <div className="font-medium">
          <h3 className="text-lg font-bold mb-2 border-b text-[#d2b57f]">
            {title}
          </h3>
          <p className="text-center text-grey-400">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default Ofer;


const Step = ({ image, title, description }) => {
  return (
    <div className="w-full px-4 py-4 mt-4 bg-gradient-to-r from-orange-300 to-[#d2b57f] rounded-lg shadow-2xl sm:w-1/2 md:w-1/2 lg:w-1/4">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-[#0e2a3b] rounded-md">
          {image}
        </div>
      </div>
      <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl">
        {title}
      </h3>
      <p className="py-4 text-gray-500 min-h-36 text-md">
        {description}
      </p>
    </div>
  );
};

export default Step;


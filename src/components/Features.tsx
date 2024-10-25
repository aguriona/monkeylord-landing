const Features = ({ title, subtitle, items, imageSrc}) => {

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between flex-wrap-reverse bg-white p-6 md:p-16 md:my-8">
        <div className="flex-1 px-8 m-auto">
          <h2 className="text-3xl font-bold text-[#d2b57f]">{title}</h2>
          <h3 className="text-2xl md:p-3">{subtitle}</h3>
          <ul>
            {items.map((item) => {
              return <li className="my-4 font-bold">🤍 {item}</li>;
            })}
          </ul>
        </div>
        <div className="flex-1">
          <img src={imageSrc} className="rounded-lg shadow-lg mx-auto" />
        </div>
      </div>
    </>
  );
};

export default Features;

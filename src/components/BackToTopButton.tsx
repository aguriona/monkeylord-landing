import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-[#d2b57f] text-white p-3 rounded-full hover:bg-amber-800 transition duration-300"
      style={{ zIndex: 1000 }}
      aria-label="Back to top"
    >
      <FiArrowUp className="text-xl" />
    </button>
  );
};

export default BackToTopButton;

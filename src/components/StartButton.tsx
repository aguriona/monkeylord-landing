import React from "react";

interface StartButtonProps {
  text?: string;
}

const StartButton: React.FC<StartButtonProps> = ({ text }) => {
  return (
    <a href="https://calendly.com/plannersingle/30min">
      <button className="bg-[#d2b57f] text-white px-4 py-2 rounded hover:bg-amber-600">
        {text ? text : "Comienza ahora"}
      </button>
    </a>
  );
};

export default StartButton;

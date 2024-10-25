import React from 'react';
import oferta from '../assets/oferta.pdf';

interface DownloadPDFButtonProps {
  fileName: string;
}

const DownloadPDFButton: React.FC<DownloadPDFButtonProps> = ({ fileName }) => {
  return (
    <a
      href={oferta}
      download={fileName}
      className="bg-[#d2b57f] text-white px-6 py-3 rounded hover:bg-amber-400 hover:text-[#d2b57f] transition-colors"
    >
      Descargar propuesta detallada
    </a>
  );
};

export default DownloadPDFButton;

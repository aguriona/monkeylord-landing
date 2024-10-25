import React from 'react';
import Navbar from '../components/Navbar';

const NotFoundPage = () => {
  return (
    <div>
      <Navbar/>
      <p className="text-center text-3xl font-bold mb-4">Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  );
};

export default NotFoundPage;

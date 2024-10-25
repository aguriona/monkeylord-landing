import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


const blogEntries = [

];

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-6">
        {blogEntries.map((entry) => (
          <div
            key={entry.id}
            className="transition ease-in-out delay-150 rounded-lg hover:-translate-y-1 hover:scale-105 duration-300"
          >
            <Link to={`/blog/${entry.id}`}>
              <div className="border border-gray-100 p-4 rounded-lg overflow-hidden shadow-lg m4-6 my-2 h-full flex flex-col justify-center">
                <h2 className="text-xl text-center font-bold mb-2 hover:text-yellow-700">
                  {entry.titulo}
                </h2>
                <img
                  src={entry.imagen1}
                  alt={entry.titulo}
                  className="w-full h-auto mb-2"
                />
                <p className="text-center hover:bg-slate-100">
                  {entry.subtitulo}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export { BlogPage };

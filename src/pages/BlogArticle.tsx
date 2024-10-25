import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import {blogEntries} from "./BlogPage";


const BlogArticle = () => {
  const { articleId } = useParams();
  const id = Number.parseInt(articleId || "0");

  return (
    <div>
      <Navbar />
      {!blogEntries[id] || blogEntries.length < id ? (
        <h1 className="text-center text-3xl font-bold mb-4">
          El Articulo No existe
        </h1>
      ) : (
        <div className="flex flex-col justify-center items-center mx-auto px-4 py-8">
          <h1 className="text-center max-w-4xl text-3xl font-bold mb-6">
            {blogEntries[id].titulo}
          </h1>
          <img
            src={blogEntries[id].imagen1}
            alt={blogEntries[id].titulo}
            className="md:w-full max-w-xl my-6 mx-auto"
          />
          <h2 className="text-xl max-w-3xl font-semibold my-6 mx-auto">
            {blogEntries[id].subtitulo}
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            {blogEntries[id].texto.split("\n").map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                <br />
              </React.Fragment>
            ))}
          </p>
          <img
            src={blogEntries[id].imagen2}
            alt={blogEntries[id].titulo}
            className="md:w-full max-w-xl my-6 mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default BlogArticle;

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import NotFoundPage from "./pages/NotFoundPage";
import BlogArticle from "./pages/BlogArticle";
import Gracias from "./pages/Gracias";
import Nosotros from "./pages/Nosotros";
import LandingPage from "./components/landing-page";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/">
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:articleId" element={<BlogArticle />} />
        <Route path="gracias" element={<Gracias />} />
        <Route path="nosotros" element={<Nosotros />} />
        {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

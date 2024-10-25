import BackToTopButton from "../components/BackToTopButton";
import FAQSection from "../components/FAQ";
import Footer from "../components/Footer";
import Contact from "../sections/Contact";
import FeaturesSection from "../sections/FeaturesSection";
import Header from "../sections/Header";
import HowItWorksSection from "../sections/HowItWorks";
import TestimonialsSection from "../sections/TestimonialSection";
import Whatweoffer from "../sections/WhatWeOfferSection";


const HomePage = () => {
  return (
    <div className="wrapper">
      <Header/>
      <FeaturesSection/>
      <Whatweoffer/>
      <HowItWorksSection/>
      <TestimonialsSection/>
      <FAQSection/>
      <Contact/>
      <Footer/>
      <BackToTopButton/>
      </div>
  );
};

export default HomePage;

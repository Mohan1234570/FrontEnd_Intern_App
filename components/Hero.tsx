import React from 'react';
//import GPTImage from '/assets/GPTImage.JPG';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="m-4 hero-section bg-white-500 text-white py-20 h-45">
      <div className="container mx-auto text-center py-10">
        <img 
          src= "https://nexus-education.com/wp-content/uploads/2023/01/514DCD17-E39C-4253-B952-B9F62E4B0293.webp"
          alt="Product Image" 
          className="m-4 bottom-15 h-100 max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800 animate-fadeIn"

        />
        <h1 className="text-blue-900 text-4xl font-bold mb-2 animate-bounce">
          Teacher AI Robot 
        </h1>
        <p className= "text-blue-900 mb-4 rounded-lg">
        “AI has the potential to transform <br/>
        Education personalising learning and enabling <br/> students to
         learn at their own pace.”
        </p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded animate-pulse">
          Call to Action
        </button>
      </div>
    </section>
  );
};

export default HeroSection;



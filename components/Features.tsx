
import React from 'react';

const features = [
  
  {
    
    icon: "assets/image1.jpg",
    title: "Helping Teachers",
    description: "The journey towards an AI-powered learning landscape requires not just technology, but empowered teachers. Here's how we can support teachers on this transformational path.We must encourage teachers to explore the diverse possibilities of AI. Hands-on workshops, collaborative learning communities, and access to AI tools are crucial. Teachers should be encouraged to critically evaluate AI tools and assess their alignment with their unique teaching styles and goals."
  },
  {
    icon: "assets/feature2.jpg",
    title: "Streamlined school administration",
    description: "AI can help in improving operational efficiency. AI tackles mountains of paperwork, such as scheduling, record keeping, report generation, data analysis, predictive maintenance, resource allocation, physical and information security, and many others. This efficiency paves the way for innovation and improved educational outcomes."
  },
  {
    icon: "assets/image3.jpg",
    title: "Revolutionized student support",
    description: "AI is transforming student support into a 24/7 personalized experience that extends beyond the classroom walls. Virtual assistants and chatbots offer constant academic aid, answering questions tirelessly in real-time. AI's capabilities go beyond academics - virtual counselors offer social-emotional skill building while predictive systems identify at-risk students before they fall through the cracks. Proactive outreach and early intervention become pillars of student support."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className=" justify-items-center features-section py-10 ml-12  bg-gray-100">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold  text-center mb-8 rounded transition duration-500 ease-in-out transform hover:bg-blue-700 hover:scale-110">Features</h2>
        <div className="grid grid-cols-1 text-center ml-9 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card text-center p-4 bg-white shadow-md rounded animate-fadeIn"
            >
              <img src={feature.icon} alt={feature.title} className="mb-4 mx-auto animate-bounce" />
              <h1 className="text-xl font-semibold mb-2">{feature.title}</h1>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


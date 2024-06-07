

  import React from 'react';

const testimonials = [
  {
    profile: 'assets/profile1.jpg',
    name: 'Cathrene',
    comment: 'This is a great product!, It will very helpfull to teachers, to explain the subjects very practically ',
  },
  {
    profile: 'assets/profile2.jpg',
    name: 'John doe',
    comment: 'I love using this product!, AI can help identify students who are struggling, allowing teachers to provide them with the support they need to succeed',
  },
  {
    profile: 'assets/profile3.jpg',
    name: 'Mery john',
    comment: 'Education systems must transform, not only in response to AI, but to meet the evolving needs of society. If we fail to adapt, AI could inadvertently replace many educators.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-20 justify-center">
      <h2 className="text-3xl font-bold text-center mb-12 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Testimonials</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg text-center">
            <img src={testimonial.profile} alt={testimonial.name} className=" h-25 rounded-full mx-auto mb-4 animate-zoomIn" />
            <h3 className="text-xl font-semibold mb-2 animate-bounce">{testimonial.name}</h3>
            <p>{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

  
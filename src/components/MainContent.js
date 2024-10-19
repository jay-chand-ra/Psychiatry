import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useServices from '../hooks/useServices';
import useFounderMessage from '../hooks/useFounderMessage';
import useTestimonials from '../hooks/useTestimonials';
import { fetchData } from '../script';

const MainContent = () => {
  const services = useServices();
  const founderMessage = useFounderMessage();
  const testimonials = useTestimonials();
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetchData().then(data => {
      setApiData(data);
    });
  }, []);

  return (
    <main className="p-5 container mx-auto max-w-6xl">
      {/* Founder's message section */}
      <section id="founder-message" className="mb-16 bg-indigo-50 p-4 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <LazyImage 
          src={founderMessage.image} 
          alt="Founder" 
          className="w-full md:w-1/3 h-auto max-h-[300px] object-cover rounded-md mb-6 md:mb-0 md:mr-8" 
        />
        <div className="md:w-2/3">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-indigo-800">{founderMessage.title}</h2>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700">{founderMessage.content}</p>
        </div>
      </section>

      {/* Services section */}
      <section id="services" className="mb-16">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center text-indigo-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Testimonials section */}
      {testimonials.length > 0 && (
        <section id="testimonials" className="mb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center text-indigo-800">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>
      )}

      {/* Contact section (you may need to add this) */}
      <section id="contact" className="mb-16">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center text-indigo-800">Contact Us</h2>
        {/* Add your contact form or information here */}
      </section>

      {/* API Data section */}
      {apiData && (
        <section id="api-data" className="mb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center text-indigo-800">API Data</h2>
          <pre className="bg-indigo-50 p-4 rounded-lg overflow-x-auto text-gray-700 text-xs md:text-sm">
            {JSON.stringify(apiData, null, 2)}
          </pre>
        </section>
      )}
    </main>
  );
};

const LazyImage = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        );
        observer.observe(imageRef);
      } else {
        // Fallback for older browsers
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return <img ref={setImageRef} src={imageSrc} alt={alt} className={className} />;
};

const ServiceCard = ({ service }) => (
  <div className="border border-indigo-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 flex flex-col bg-white">
    <LazyImage 
      src={service.image} 
      alt={service.name} 
      className="w-full h-40 md:h-48 object-cover rounded-md mb-4" 
    />
    <h3 className="font-semibold text-base md:text-lg mb-2 text-indigo-700">{service.name}</h3>
    <p className="text-gray-600 flex-grow text-xs md:text-sm">{service.description}</p>
    <Link 
      to={`/service/${service.id}`} 
      className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300 text-xs md:text-sm text-center"
    >
      Learn More
    </Link>
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white border border-indigo-100 p-4 rounded-lg shadow-md flex items-start hover:shadow-lg transition duration-300 transform hover:scale-105">
    <LazyImage 
      src={testimonial.image} 
      alt={testimonial.name} 
      className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4 object-cover flex-shrink-0" 
    />
    <div>
      <p className="font-semibold text-sm md:text-base mb-1 text-indigo-700">{testimonial.name}</p>
      <p className="text-gray-600 text-xs md:text-sm">{testimonial.message}</p>
    </div>
  </div>
);

export default MainContent;
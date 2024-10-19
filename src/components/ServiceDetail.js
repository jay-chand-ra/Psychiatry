import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useServices from '../hooks/useServices';

const ServiceDetail = () => {
  const { id } = useParams();
  const services = useServices();
  const service = services.find(s => s.id === parseInt(id));

  if (!service) {
    return <div className="container mx-auto max-w-4xl px-4 py-8">Service not found</div>;
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-indigo-800">{service.name}</h1>
      <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
        <img 
          src={service.image} 
          alt={service.name} 
          className="w-full h-64 md:h-80 lg:h-96 object-cover object-center"
        />
      </div>
      <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
      <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Detailed Information</h2>
      <p className="text-gray-700 mb-6 text-lg">
        {service.detailedDescription || "More detailed information about this service will be available soon."}
      </p>
      <Link 
        to="/" 
        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300 inline-block"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ServiceDetail;

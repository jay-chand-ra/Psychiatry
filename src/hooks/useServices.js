import { useState, useEffect } from 'react';

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Simulating data fetch
    setServices([
      {
        id: 1,
        name: 'Cognitive Behavioral Therapy',
        description: 'Cognitive Behavioral Therapy (CBT) is a structured, time-limited psychotherapy that focuses on the relationship between thoughts, feelings, and behaviors.',
        image: 'https://images.pexels.com/photos/9065264/pexels-photo-9065264.jpeg',
      },
      {
        id: 2,
        name: 'Psychodynamic Therapy',
        description: 'Psychodynamic Therapy explores the unconscious mind and how past experiences shape current behavior.',
        image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg',
      },
      {
        id: 3,
        name: 'Mindfulness-Based Therapy',
        description: 'Mindfulness-Based Therapy incorporates mindfulness practices into the therapeutic process.',
        image: 'https://images.pexels.com/photos/5711011/pexels-photo-5711011.jpeg',
      },
    ]);
  }, []);

  return services;
};

export default useServices;

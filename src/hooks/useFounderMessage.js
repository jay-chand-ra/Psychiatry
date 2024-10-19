import { useState, useEffect } from 'react';

const useFounderMessage = () => {
  const [founderMessage, setFounderMessage] = useState({});

  useEffect(() => {
    // Simulating data fetch
    setFounderMessage({
      title: "A Message from Our Founder",
      content: "Welcome to our Psychiatry Center, where we prioritize your mental health and well-being. Our dedicated team is here to provide the support you need.",
      image: 'https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    });
  }, []);

  return founderMessage;
};

export default useFounderMessage;

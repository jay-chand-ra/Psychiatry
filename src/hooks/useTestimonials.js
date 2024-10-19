import { useState, useEffect } from 'react';

const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Simulating data fetch
    setTestimonials([
      {
        id: 1,
        name: 'John Doe',
        message: "This is the best therapy I have ever received! The support transformed my life and helped me navigate my challenges effectively.",
        image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      },
      {
        id: 2,
        name: 'Jane Smith',
        message: "The support I received was life-changing! I felt heard and understood throughout the process, which made all the difference.",
        image: 'https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg',
      },
      {
        id: 3,
        name: 'Mike Johnson',
        message: "I was skeptical at first, but the therapists here are truly exceptional. They helped me overcome my anxiety and regain control of my life.",
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      },
      {
        id: 4,
        name: 'Emily Brown',
        message: "The personalized approach to therapy here is remarkable. I've made significant progress in managing my depression thanks to their support.",
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      },
      {
        id: 5,
        name: 'David Lee',
        message: "I appreciate the holistic approach to mental health at this center. They don't just treat symptoms; they help you build a better life.",
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      },
    ]);
  }, []);

  return testimonials;
};

export default useTestimonials;

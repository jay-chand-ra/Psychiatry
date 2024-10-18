import React, { Component } from 'react';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: 1,
          name: 'Cognitive Behavioral Therapy',
          description: 'Cognitive Behavioral Therapy (CBT) is a structured, time-limited psychotherapy that focuses on the relationship between thoughts, feelings, and behaviors. It aims to identify and challenge negative thought patterns, replacing them with healthier alternatives. CBT is effective for a range of issues, including anxiety and depression.',
          image: 'https://images.pexels.com/photos/9065264/pexels-photo-9065264.jpeg',
        },
        {
          id: 2,
          name: 'Psychodynamic Therapy',
          description: 'Psychodynamic Therapy explores the unconscious mind and how past experiences shape current behavior. It focuses on understanding emotional conflicts and developing insight into thoughts and feelings. This process leads to improved emotional functioning and healthier interpersonal relationships over time.',
          image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg',
        },
        {
          id: 3,
          name: 'Mindfulness-Based Therapy',
          description: 'Mindfulness-Based Therapy incorporates mindfulness practices into the therapeutic process. It teaches individuals to focus on the present moment without judgment, enhancing self-awareness and emotional regulation. This approach encourages acceptance of thoughts and feelings, promoting a sense of calm.',
          image: 'https://images.pexels.com/photos/5711011/pexels-photo-5711011.jpeg',
        },
      ],
      founderMessage: {
        title: "A Message from Our Founder",
        content: "Welcome to our Psychiatry Center, where we prioritize your mental health and well-being. Our dedicated team is here to provide the support you need. Together, we can explore your thoughts and feelings, and empower you to take the steps necessary for a brighter future.",
        image: 'https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      testimonials: [
        {
          id: 1,
          name: 'John Doe',
          message: 'This is the best therapy I have ever received! The support transformed my life and helped me navigate my challenges effectively.',
          image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg', // Direct image URL
        },
        {
          id: 2,
          name: 'Jane Smith',
          message: 'The support I received was life-changing! I felt heard and understood throughout the process, which made all the difference.',
          image: 'https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg', // Direct image URL
        },
      ],
    };
  }

  render() {
    return (
      <main className="p-5">
        <section id="founder-message" className="mb-10 bg-gray-100 p-5 rounded-md shadow flex items-center">
          <img 
            src={this.state.founderMessage.image} 
            alt="Founder" 
            className="w-1/3 h-auto max-h-[400px] object-contain rounded-md mr-5" 
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{this.state.founderMessage.title}</h2>
            <p className="mt-3">{this.state.founderMessage.content}</p>
          </div>
        </section>

        <section id="services" className="mb-10">
          <h2 className="text-2xl font-bold mb-5">Services Offered</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {this.state.services.map(service => (
              <li key={service.id} className="border p-4 rounded-md shadow hover:bg-gray-50 transition duration-200 flex flex-col">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-48 object-cover rounded-md mb-2" 
                />
                <h3 className="font-semibold text-lg mb-1">{service.name}</h3>
                <p className="text-gray-700">{service.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="testimonials">
          <h2 className="text-2xl font-bold mb-5">Testimonials</h2>
          <ul className="space-y-6">
            {this.state.testimonials.map(testimonial => (
              <li key={testimonial.id} className="border p-4 rounded-md shadow hover:bg-gray-50 transition duration-200 flex items-start">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover" 
                />
                <div>
                  <strong className="block text-lg">{testimonial.name}</strong>
                  <p className="text-gray-600">{testimonial.message}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default MainContent;

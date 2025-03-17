const TestimonialCard = ({ quote, author, role, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-start mb-4">
        <div className="mr-4">
          <i className="bi bi-quote text-4xl text-primary-light"></i>
        </div>
        <p className="italic text-gray-700">{quote}</p>
      </div>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
          crossOrigin="anonymous"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/100x100/6D4242/FFFFFF?text=${author.charAt(0)}`;
          }}
        />
        <div>
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  )
}

const Speaking = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Asif's keynote address was the highlight of our conference. His ability to connect with the audience while delivering complex information was remarkable.",
      author: "Sarah Johnson",
      role: "Event Director, Global Media Summit",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      id: 2,
      quote: "We've had Asif speak at three of our corporate events. Each time, he tailors his presentation perfectly to our audience and delivers actionable insights.",
      author: "Michael Chen",
      role: "CEO, Innovate Technologies",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      id: 3,
      quote: "The media training Asif provided transformed how our executives handle interviews. His practical approach and personalized feedback made all the difference.",
      author: "Rebecca Torres",
      role: "Communications Director, Horizon Group",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    }
  ]

  const topics = [
    "Media Training for Executives",
    "Crisis Communication Strategies",
    "The Art of Public Speaking",
    "Building Your Personal Brand",
    "Effective Communication in Leadership",
    "Mastering Television Appearances",
    "Storytelling for Business Impact",
    "Digital Media Presence Optimization"
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Speaking & Media</h1>
            <p className="text-xl mb-8 text-gray-300">
              Engaging presentations, workshops, and media training delivered with expertise and impact.
            </p>
            <a href="#contact" className="btn-primary">Book Asif for Your Event</a>
          </div>
        </div>
      </section>
      
      {/* Speaking Topics */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Speaking Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary-dark mb-3">
                  <i className="bi bi-mic-fill text-2xl"></i>
                </div>
                <h3 className="font-serif text-lg mb-2">{topic}</h3>
                <p className="text-gray-600 text-sm">
                  Customized presentations tailored to your audience's specific needs and interests.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Past Speaking Engagements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Global Media Summit" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                crossOrigin="anonymous"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400/6D4242/FFFFFF?text=Global+Media+Summit";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white font-serif text-xl">Global Media Summit</h3>
                <p className="text-gray-300 text-sm">New York, 2023</p>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Leadership Conference" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                crossOrigin="anonymous"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400/6D4242/FFFFFF?text=Leadership+Conference";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white font-serif text-xl">Leadership Conference</h3>
                <p className="text-gray-300 text-sm">London, 2022</p>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1712&q=80" 
                alt="Communication Summit" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                crossOrigin="anonymous"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400/6D4242/FFFFFF?text=Communication+Summit";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white font-serif text-xl">Communication Summit</h3>
                <p className="text-gray-300 text-sm">Singapore, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-secondary-dark">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">What People Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard 
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Book Asif for Your Event</h2>
            <p className="mb-8 text-gray-200">
              Interested in having Asif speak at your next event? Fill out the form below with your event details.
            </p>
            
            <form className="max-w-xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="px-4 py-3 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="px-4 py-3 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Event Name" 
                  className="px-4 py-3 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30"
                />
                <input 
                  type="text" 
                  placeholder="Event Date" 
                  className="px-4 py-3 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30"
                />
              </div>
              
              <input 
                type="text" 
                placeholder="Event Location" 
                className="w-full px-4 py-3 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 mb-4"
              />
              
              <textarea 
                placeholder="Additional Details" 
                rows="4" 
                className="w-full px-4 py-3 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 mb-6"
              ></textarea>
              
              <button type="submit" className="bg-secondary-dark text-dark px-8 py-3 rounded-full font-serif tracking-wider hover:bg-white transition-all duration-300">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Speaking

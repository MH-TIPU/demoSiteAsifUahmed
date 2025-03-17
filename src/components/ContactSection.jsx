const ContactSection = () => {
  return (
    <section id="contact" className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Invite Asif to Speak</h2>
          <p className="mb-8 text-gray-200">
            Looking for an engaging speaker for your next event? Asif U Ahmed brings expertise, 
            charisma, and valuable insights to every speaking engagement.
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
            
            <input 
              type="text" 
              placeholder="Event Details" 
              className="w-full px-4 py-3 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 mb-4"
            />
            
            <textarea 
              placeholder="Your Message" 
              rows="4" 
              className="w-full px-4 py-3 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 mb-6"
            ></textarea>
            
            <button type="submit" className="bg-secondary-dark text-dark px-8 py-3 rounded-full font-serif tracking-wider hover:bg-white transition-all duration-300">
              Send Invitation
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

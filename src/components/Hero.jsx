const Hero = () => {
  return (
    <section className="relative bg-dark-light text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="hero-text mb-6">
              Speaking<br />&<br />Media
            </h1>
            <a href="#contact" className="btn-primary inline-block">
              Invite Asif to Speak
            </a>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Asif U Ahmed" 
                className="w-full h-auto rounded-md shadow-lg"
                crossOrigin="anonymous"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x800/6D4242/FFFFFF?text=Asif+U+Ahmed";
                }}
              />
            </div>
            
            <div className="absolute top-1/4 right-0 md:right-1/4 bg-primary-light bg-opacity-90 p-6 rounded-md shadow-lg max-w-xs">
              <h2 className="font-serif text-2xl mb-2">ASIF U CONSULTING</h2>
              <p className="text-sm text-gray-200">
                Professional speaker and media consultant with expertise in public speaking, 
                media training, and strategic communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

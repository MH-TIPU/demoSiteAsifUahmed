const MediaSection = () => {
  return (
    <section className="bg-dark-light text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">BORA MEDIA</h2>
            <p className="mb-6 text-gray-300">
              Bora Media specializes in creating compelling content and strategic communication solutions 
              for businesses and individuals looking to enhance their media presence.
            </p>
            <p className="mb-8 text-gray-300">
              Our team of experts provides comprehensive media training, content development, 
              and public relations services tailored to your specific needs.
            </p>
            <a href="#" className="btn-primary">Learn More</a>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Bora Media" 
              className="w-full h-auto rounded-md shadow-lg"
              crossOrigin="anonymous"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/600x400/6D4242/FFFFFF?text=Bora+Media";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaSection

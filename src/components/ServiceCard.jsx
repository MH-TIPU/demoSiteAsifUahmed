const ServiceCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="service-icon w-32 h-32 md:w-40 md:h-40 mb-4">
        <img 
          src={icon} 
          alt={title} 
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/200x200/6D4242/FFFFFF?text=${title}`;
          }}
        />
      </div>
      <h3 className="font-serif text-lg text-center">{title}</h3>
    </div>
  )
}

export default ServiceCard

import ServiceCard from './ServiceCard'

const services = [
  {
    id: 1,
    title: "Newsroom",
    icon: "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 2,
    title: "Consulting",
    icon: "https://images.unsplash.com/photo-1529119513315-c7c361862fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 3,
    title: "Blog Org",
    icon: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 4,
    title: "Speaking",
    icon: "https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 5,
    title: "Blog",
    icon: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 6,
    title: "Speaking & Media",
    icon: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
  }
]

const Services = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {services.map(service => (
            <ServiceCard 
              key={service.id}
              icon={service.icon}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

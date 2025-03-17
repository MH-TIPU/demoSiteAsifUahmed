import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-primary sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-white font-serif text-2xl md:text-3xl font-bold">
            Asif U Ahmed
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="nav-link">HOME</NavLink>
            <NavLink to="/blog" className="nav-link">BLOG</NavLink>
            <NavLink to="/speaking" className="nav-link">SPEAKING</NavLink>
            <button className="bg-white text-dark rounded-full px-4 py-1 flex items-center">
              <i className="bi bi-sun-fill mr-2"></i> <span>0</span>
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`}></i>
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary-dark">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>HOME</NavLink>
            <NavLink to="/blog" className="nav-link" onClick={() => setIsOpen(false)}>BLOG</NavLink>
            <NavLink to="/speaking" className="nav-link" onClick={() => setIsOpen(false)}>SPEAKING</NavLink>
            <button className="bg-white text-dark rounded-full px-4 py-1 w-16 flex items-center">
              <i className="bi bi-sun-fill mr-2"></i> <span>0</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

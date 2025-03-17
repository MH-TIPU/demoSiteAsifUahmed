import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="font-serif text-xl font-bold">Asif U Ahmed</Link>
            <p className="text-sm mt-2 text-gray-400">Speaker, Consultant & Media Professional</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary-light transition-colors">
              <i className="bi bi-twitter text-xl"></i>
            </a>
            <a href="#" className="hover:text-primary-light transition-colors">
              <i className="bi bi-linkedin text-xl"></i>
            </a>
            <a href="#" className="hover:text-primary-light transition-colors">
              <i className="bi bi-instagram text-xl"></i>
            </a>
            <a href="#" className="hover:text-primary-light transition-colors">
              <i className="bi bi-youtube text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Asif U Ahmed. All rights reserved.</p>
          <p className="mt-1">Designed by WebSparks AI</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

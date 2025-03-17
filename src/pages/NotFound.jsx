import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-secondary">
      <div className="text-center px-4">
        <h1 className="font-serif text-6xl md:text-8xl text-primary-dark mb-4">404</h1>
        <h2 className="font-serif text-2xl md:text-3xl mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link to="/" className="btn-primary">
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}

export default NotFound

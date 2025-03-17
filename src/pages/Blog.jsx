const BlogPost = ({ title, date, excerpt, image }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400/6D4242/FFFFFF?text=Blog+Post";
          }}
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="font-serif text-xl mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a href="#" className="text-primary-dark font-medium hover:underline">Read More</a>
      </div>
    </article>
  )
}

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Public Speaking: Mastering Your Delivery",
      date: "October 15, 2023",
      excerpt: "Discover the essential techniques that can transform your public speaking skills and help you connect with any audience.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 2,
      title: "Media Training: Preparing for Your Television Debut",
      date: "September 28, 2023",
      excerpt: "Learn how to prepare for television appearances with confidence and poise, from wardrobe choices to message delivery.",
      image: "https://images.unsplash.com/photo-1581368135153-a506cf13531c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 3,
      title: "Crisis Communication: Managing Media During Difficult Times",
      date: "September 10, 2023",
      excerpt: "Effective strategies for handling media inquiries and public communication during organizational crises.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 4,
      title: "The Power of Storytelling in Business Presentations",
      date: "August 22, 2023",
      excerpt: "Why narrative structure matters in business contexts and how to craft compelling stories that resonate with stakeholders.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 5,
      title: "Building Your Personal Brand Through Media Appearances",
      date: "August 5, 2023",
      excerpt: "Strategic approaches to leveraging media opportunities for enhancing your professional reputation and visibility.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 6,
      title: "Virtual Speaking: Engaging Remote Audiences Effectively",
      date: "July 18, 2023",
      excerpt: "Tips and techniques for delivering impactful presentations in virtual environments and maintaining audience engagement.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    }
  ]

  return (
    <div className="bg-secondary-dark py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-primary-dark mb-4">Blog</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Insights, advice, and expertise on public speaking, media training, and effective communication strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogPost 
              key={post.id}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              image={post.image}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blog

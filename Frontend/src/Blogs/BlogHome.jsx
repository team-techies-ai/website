import React from "react";

const BlogHome = () => {
  const blogPosts = [
    {
      title: "How AI is Transforming the Future",
      description:
        "Artificial Intelligence is revolutionizing various sectors, from healthcare to education. Let's explore how AI is shaping the future of technology.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "The Power of Machine Learning",
      description:
        "Machine learning is enabling computers to learn from data. In this post, we delve into its applications and how it's impacting industries.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "Understanding Deep Learning in AI",
      description:
        "Deep Learning is a subset of machine learning with a focus on neural networks. Learn about its structure and its immense potential in various fields.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "Exploring Natural Language Processing (NLP)",
      description:
        "NLP is a key component in AI, enabling machines to understand human language. This post explores the core concepts of NLP and its applications.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-[120px] lg:pt-[150px]">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035bff] via-white to-[#4c70b3] leading-tight">
            Latest Blog Posts
          </span>
        </h1>
        <p className="text-lg sm:text-xl font-medium">
          Stay updated with the latest in AI, Machine Learning, and more.
        </p>
      </div>

      {/* Blog Posts Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 border-2 border-[#E4E4E4] hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">{post.title}</h2>
            <p className="text-base sm:text-lg mb-4 text-gray-600">{post.description}</p>
            <a
              href={post.link}
              className="text-[#035bff] font-semibold hover:text-[#4c70b3] transition-colors duration-300"
            >
              Read More
            </a>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="mt-12 text-center">
        <button className="bg-[#035bff] text-white py-2 px-6 rounded-lg hover:bg-[#4c70b3] transition-colors duration-300">
          Load More Posts
        </button>
      </div>
    </div>
  );
};

export default BlogHome;

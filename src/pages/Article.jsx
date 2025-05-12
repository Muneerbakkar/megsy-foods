import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import articles from "../data/articles"; // Ensure correct import

const Article = () => {
  useEffect(() => {
    // Smooth scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling effect
    });
  }, []);

  const { articleId } = useParams(); // Get the articleId from the URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Find the article based on the ID
    const selectedArticle = articles.find((a) => a.id === parseInt(articleId));
    setArticle(selectedArticle);
  }, [articleId]);

  if (!article) return <p className="text-center text-gray-500">Loading...</p>;

  // Find related articles by excluding the current article
  const relatedArticles = articles.filter((a) => a.id !== article.id);

  // Scroll to the top when a "Read More" link is clicked
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full mt-28 md:mt-32">
      {/* Render Static Content */}
      <div className="relative h-96 w-full">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        {/* Breadcrumb (Positioned Above Date and Small) */}
        <div className="py-2 text-sm text-gray-600">
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
          {" > "}
          <span className="text-gray-800">{article.title}</span>
        </div>
        {/* Date */}
        <p className="text-gray-600 text-sm mt-10 mb-4">{article.date}</p>

        {/* Render Dynamic Section */}
        <div className="w-full">
          {/* <p className="text-sm text-gray-500 text-center mt-2">
            {article.dynamicContent.caption}
          </p> */}

          {/* Additional dynamic content */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {article.dynamicContent.heading}
          </h2>
          {article.dynamicContent.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-gray-800 leading-relaxed mb-6"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Related Articles Section */}
        <div className="mt-16 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Related Articles
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6">
            {relatedArticles.map((related) => (
              <div
                key={related.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={related.image}
                  alt={related.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{related.date}</p>
                  <p className="text-gray-700 text-md mb-2">
                    {related.content.substring(0, 100)}...
                  </p>
                  <Link
                    to={`/article/${related.id}`}
                    className="text-yellow-500 font-medium hover:underline"
                    onClick={handleScrollToTop} // Scroll to top when clicking
                  >
                    Read More »
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;

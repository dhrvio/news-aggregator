export default function ArticleCard({ article, onClick }) {
  return (
    <div
      className="text-black bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      {article.urlToImage && (
        <img 
          src={article.urlToImage} 
          alt={article.title} 
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
          }}
        />
      )}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.description}</p>
        <div className="mt-auto">
          <div className="flex items-center text-xs text-gray-500 mb-2">
            {article.source?.name && (
              <span className="bg-gray-100 px-2 py-1 rounded mr-2">
                {article.source.name}
              </span>
            )}
            <span>
              {new Date(article.publishedAt).toLocaleDateString()}
            </span>
          </div>
          <button 
            className="text-blue-600 hover:text-blue-800 text-sm font-medium  cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onClick(article);
            }}
          >
            Read more →
          </button>
        </div>
      </div>
    </div>
  );
}
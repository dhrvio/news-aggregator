import ArticleCard from './ArticleCard';
import Loader from './Loader';

export default function Feed({ articles, loading, onSelect }) {
  if (loading) return <Loader />;
  
  if (!articles.length) return (
    <div className="text-center py-12">
      <h3 className="text-xl font-medium text-gray-600">No articles found</h3>
      <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <ArticleCard 
          key={`${article.publishedAt}-${index}`} 
          article={article} 
          onClick={onSelect} 
        />
      ))}
    </div>
  );
}
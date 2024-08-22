import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

function NewsBoard({category}) {
  const [articles, setArticles] = useState([]);

  // Fetch news data from API
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching the news:', error));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => (
        <NewsItem 
          key={index} 
          title={news.title} 
          description={news.description} 
          src={news.urlToImage} 
          url={news.url} 
        />
      ))}
    </div>
  );
}

export default NewsBoard;

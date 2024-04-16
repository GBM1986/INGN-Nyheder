import React from 'react';
import { useGetQuery } from '../hooks/useGetQuery';
import { getNewsByCategory } from '../queries/getNewsByCategory';

export const Udland = () => {
  const { data, isLoading, error } = useGetQuery(getNewsByCategory, 'udland', {category: 'udland'});

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  console.log('data', data);
  
  return (
    <div>
      {data.category.allNews.map((news, index) => (
        <div className={`div${index + 1}`} key={index}>
          <div className="content">
            <h2>{news.headline}</h2>
            <h4>{news.underheadline}</h4>
            <span>D. {news.date}</span>
            <p className='line-clamp-1'>{news.markdown}</p>
          </div>
          <div className="img-container">
            <img className='object-contain' src={news.image.url} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

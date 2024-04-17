import React from 'react';
import { useGetQuery } from '../hooks/useGetQuery';
import { getNewsByCategory } from '../queries/getNewsByCategory';
import { NavLink } from 'react-router-dom';

export const Teknologi = () => {
  const { data, isLoading, error } = useGetQuery(getNewsByCategory, 'teknologi', {category: 'teknologi'});

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  console.log('data', data);
  
  return (
    <div>
      {data.category.allNews.map((news, index) => (
        <div className={`div${index + 1} mb-5`} key={index}>
          <div className="content">
            <h2>{news.headline}</h2>
            <span>D. {news.date}</span>
            <p className='line-clamp-1'>{news.markdown}</p>
            <NavLink to={`/details/${news.id}`}>læs mere</NavLink>
          </div>
          <div className="img-container">
            <img className='object-contain' src={news.image.url} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

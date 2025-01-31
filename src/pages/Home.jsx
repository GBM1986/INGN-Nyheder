import React from 'react';
import { getAllNews } from '../queries/getAllNews';
import { useGetQuery } from '../hooks/useGetQuery';
import { NavLink } from 'react-router-dom';


export const Home = () => {
  const { data, isLoading, error } = useGetQuery(getAllNews, 'allNews');

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  console.log('data', data);
  

  return (
    <div className="parent">
      {data.allNews.map((news, index) => (
        <div
          className={`div${index + 1}`} 
          key={index}
        >
        <div className="content">
          <h2>{news.headline}</h2>
          <span>D. {news.date}</span>
          <p className='line-clamp-1'>{news.markdown}</p>
          <NavLink to={`/details/${news.id}`}>læs mere</NavLink>
        </div>
          <div  class="img-container">
            <img className='object-contain' src={news.image.url} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

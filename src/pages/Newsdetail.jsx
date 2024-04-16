import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetQuery } from '../hooks/useGetQuery';
import { getNewsById } from '../queries/getNewsById';

export const NewsDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetQuery(getNewsById, "NewsDetail", { myid: id }); // Pass id as a variable

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error{error.message}</p>;

  console.log('data', data);

 
  return (
    <div>
       <img src={data.allNews[0].image.url} alt="" />
      <h1>{data.allNews[0].headline}</h1>
      <h2>{data.allNews[0].underheadline}</h2>
      <p>{data.allNews[0].date}</p>
      <p>{data.allNews[0].markdown}</p>
     

      
    </div>
  );
};

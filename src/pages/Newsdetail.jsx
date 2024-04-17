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
  <div className=' border border-gray-300 rounded-lg bg-gray-50 text-balance'>
      <img className='mx-auto my-auto' src={data.allNews[0].image.url} alt="" />
    <div className="flex flex-col ml-24 pt-5 mr-24">
      <h1 className="font-roboto-flex font-normal text-2xl lg:text-3xl">{data.allNews[0].headline}</h1>
      <p className="font-roboto-flex font-normal text-base lg:text-lg text-red-600">D. {data.allNews[0].date}</p>
      <div className="flex justify-center mt-10">
        <p className="text-base text-align-center lg:text-lg ml-12 mr-12 mb-8">{data.allNews[0].markdown}</p>
      </div>
    </div>
</div>

  );
};

import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import Loader from './Loader';
import Cocktail from './Cocktail';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  const [page, setPage] = useState(0);

  if (loading) {
    return <Loader />;
  }
  if (cocktails === null) {
    return <h4 className='error'>Sorry no drinks matched your search.</h4>;
  }
  if (cocktails.length === 0) {
    return (
      <h3 className='error'>
        Unfortunalty the servers of Cocktails API are down at the moment, so
        until further update this website is currently down.
      </h3>
    );
  }
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > cocktails.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = cocktails.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <>
      <div className='cocktails-container'>
        {cocktails[page].map((item) => {
          return <Cocktail {...item} key={item.idDrink} />;
        })}
      </div>
      {!loading && (
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPage}>
            prev
          </button>
          {cocktails.map((item, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === page ? 'active-btn' : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className='next-btn' onClick={nextPage}>
            next
          </button>
        </div>
      )}
    </>
  );
};

export default CocktailList;

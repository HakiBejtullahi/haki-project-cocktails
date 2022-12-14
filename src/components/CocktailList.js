import React from 'react';
import { useGlobalContext } from '../context';
import Loader from './Loader';
import Cocktail from './Cocktail';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loader />;
  }
  if (cocktails === null) {
    return <h4 className='error'>Sorry no drinks matched your search.</h4>;
  }

  return (
    <>
      <div className='cocktails-container'>
        {cocktails.map((item) => {
          return <Cocktail {...item} key={item.idDrink} />;
        })}
      </div>
    </>
  );
};

export default CocktailList;

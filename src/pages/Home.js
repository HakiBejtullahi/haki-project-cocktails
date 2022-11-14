import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import Loader from '../components/Loader';

const Home = () => {
  return (
    <div className='section-center main-center'>
      <h2 className='section-title'>Cocktails List</h2>
      <SearchForm />
      <CocktailList />
    </div>
  );
};

export default Home;

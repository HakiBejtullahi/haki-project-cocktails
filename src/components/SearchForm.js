import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { setSearchInput, searchInput } = useGlobalContext();

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <label htmlFor='search'>Search your favorite cocktail</label>
      <input
        type='text'
        id='search'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;

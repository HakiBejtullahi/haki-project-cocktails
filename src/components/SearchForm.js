import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { setSearchInput, searchInput, fetchDrinks } = useGlobalContext();

  const handleSearch = async (e) => {
    const searchValue = e.target.value;

    setSearchInput(searchValue);
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <label htmlFor='search'>Search your favorite cocktail</label>
      <input
        type='text'
        id='search'
        value={searchInput}
        onChange={handleSearch}
        placeholder={'margArita'}
      />
    </form>
  );
};

export default SearchForm;

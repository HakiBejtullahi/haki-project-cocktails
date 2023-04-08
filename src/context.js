import React, { useState, useContext, useEffect, useCallback } from 'react';

const baseUrl = 'www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';

const searchUrl =
  'www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [cocktails, setCocktails] = useState([]);

  const getFromLocalStorage = () => {
    const userCocktails = localStorage.getItem('user-cocktails');
    if (userCocktails) {
      return JSON.parse(localStorage.getItem('user-cocktails'));
    } else {
      return [];
    }
  };

  const paginate = (data) => {
    const itemsPerPage = 12;
    const numberOfPages = Math.ceil(data.length / itemsPerPage);

    const newCocktails = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage;
      return data.slice(start, start + itemsPerPage);
    });
    return newCocktails;
  };
  const [userCocktails, setUserCocktails] = useState(getFromLocalStorage());

  const saveUserCocktails = (id, name, image) => {
    setUserCocktails([...userCocktails, { id, name, image }]);
  };

  useEffect(() => {
    localStorage.setItem('user-cocktails', JSON.stringify(userCocktails));
  }, [userCocktails]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await fetch(baseUrl);
      const data = await resp.json();
      console.log(resp);
      setCocktails(paginate(data.drinks));
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  });
  const fetchSearchDrinks = useCallback(async () => {
    setLoading(true);

    try {
      const resp = await fetch(`${searchUrl}${searchInput}`);
      const data = await resp.json();
      setCocktails(paginate(data.drinks));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  });
  useEffect(() => {
    if (!searchInput) {
      fetchDrinks();
    }
  }, [searchInput]);
  useEffect(() => {
    if (searchInput) {
      fetchSearchDrinks();
    }
  }, [searchInput]);
  return (
    <AppContext.Provider
      value={{
        fetchDrinks,
        searchInput,
        setSearchInput,
        saveUserCocktails,
        setUserCocktails,
        getFromLocalStorage,
        cocktails,
        setCocktails,
        loading,
        userCocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

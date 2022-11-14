import React, { useState, useContext, useEffect } from 'react';

const baseUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';

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

  const [userCocktails, setUserCocktails] = useState(getFromLocalStorage());

  const saveUserCocktails = (id, name, image) => {
    setUserCocktails([...userCocktails, { id, name, image }]);
  };

  useEffect(() => {
    localStorage.setItem('user-cocktails', JSON.stringify(userCocktails));
  }, [userCocktails]);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const resp = await fetch(baseUrl);
      const data = await resp.json();
      setCocktails(data.drinks);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDrinks();
  }, []);
  return (
    <AppContext.Provider
      value={{
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

import React from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import SingleDrinks from '../pages/SingleDrinks';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const UserCocktails = () => {
  const { userCocktails, setUserCocktails } = useGlobalContext();

  const deleteCocktail = (id) => {
    const newUserCocktails = userCocktails.filter((item) => item.id !== id);
    setUserCocktails(newUserCocktails);
  };
  const closeSidebar = () => {
    const sidebar = document.querySelector('.user-cocktails');

    if (sidebar.classList.contains('user-cocktails-show')) {
      sidebar.classList.remove('user-cocktails-show');
    }
  };

  return (
    <aside className='user-cocktails'>
      <div className='userCocktails-container'>
        <h2>user cocktails</h2>
        <button className='close-user-cocktails' onClick={closeSidebar}>
          <FaArrowAltCircleLeft />
        </button>
        <div className='user-list'>
          {userCocktails.map((item) => {
            return (
              <article key={item.id} className='user-cocktail'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='user-cocktail-img'
                />
                <Link
                  to={`/cocktail/${item.id}`}
                  onClick={() => {
                    document
                      .querySelector('.user-cocktails')
                      .classList.remove('user-cocktails-show');
                  }}
                  element={<SingleDrinks />}
                >
                  <p className='user-cocktail-info'>{item.name}</p>
                </Link>
                <button onClick={() => deleteCocktail(item.id)}>
                  <AiOutlineClose />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default UserCocktails;

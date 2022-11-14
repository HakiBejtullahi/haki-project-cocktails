import React from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import SingleDrinks from '../pages/SingleDrinks';
import { AiOutlineClose } from 'react-icons/ai';

const UserCocktails = () => {
  const { userCocktails, setUserCocktails } = useGlobalContext();

  const deleteCocktail = (id) => {
    const newUserCocktails = userCocktails.filter((item) => item.id !== id);
    setUserCocktails(newUserCocktails);
  };

  return (
    <aside className='user-cocktails'>
      <div className='userCocktails-container'>
        <h2>user cocktails</h2>
        <button
          className='close-user-cocktails'
          onClick={() => {
            document
              .querySelector('.user-cocktails')
              .classList.remove('user-cocktails-show');
          }}
        >
          <AiOutlineClose />
        </button>

        {userCocktails.map((item) => {
          return (
            <article key={item.id} className='user-cocktail'>
              <img
                src={item.image}
                alt={item.name}
                className='user-cocktail-img'
              />
              <p>{item.name}</p>
              <Link
                to={`/cocktail/${item.id}`}
                onClick={() => {
                  document
                    .querySelector('.user-cocktails')
                    .classList.remove('user-cocktails-show');
                }}
                element={<SingleDrinks />}
              >
                learn more
              </Link>
              <button onClick={() => deleteCocktail(item.id)}>
                <AiOutlineClose />
              </button>
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default UserCocktails;
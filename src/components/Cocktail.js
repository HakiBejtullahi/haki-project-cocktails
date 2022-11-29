import React from 'react';
import { NavLink } from 'react-router-dom';
import SingleDrink from '../pages/SingleDrinks';
import { useGlobalContext } from '../context';

const Cocktail = ({ strDrink: name, strDrinkThumb: image, idDrink: id }) => {
  const { saveUserCocktails, userCocktails } = useGlobalContext();

  return (
    <article className='cocktail' data-id={id}>
      <img src={image} alt={name} />

      <h4>{name}</h4>
      <NavLink
        to={`/cocktail/${id}`}
        className={'cocktail-link'}
        element={<SingleDrink />}
      >
        Learn More
      </NavLink>
      <button
        className=' cocktail-btn'
        data-id={id}
        onClick={(e) => {
          let btnId = e.target.dataset.id;
          let inCart = userCocktails.find((item) => item.id === btnId);
          if (inCart) {
            document
              .querySelector('.user-cocktails')
              .classList.add('user-cocktails-show');

            alert('<h1>hello</h1>');
            return;
          } else {
            saveUserCocktails(id, name, image);
          }
          document
            .querySelector('.user-cocktails')
            .classList.add('user-cocktails-show');
        }}
      >
        Save drink
      </button>
    </article>
  );
};

export default Cocktail;

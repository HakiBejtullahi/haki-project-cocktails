import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Home from '../pages/Home';
import { useGlobalContext } from '../context';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const urlSearch = 'www.thecocktaildb.com/api/json/v1/1/search.php?f=';

const SingleDrinks = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(false);
  const { saveUserCocktails, userCocktails } = useGlobalContext();

  useEffect(() => {
    setLoading(true);
    async function fetchDrink() {
      try {
        const resp = await fetch(`${url}${id}`);
        const data = await resp.json();
        if (data.drinks) {
          const {
            drinkId: id,
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
          setLoading(false);
        } else {
          setCocktail(null);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchDrink();
  }, [id]);
  if (loading) {
    return <Loader />;
  }
  if (!cocktail) {
    return (
      <div className='section-center'>
        <h4 className='section-title'>something went wrong</h4>

        <Link to={'/'} element={<Home />} className='btn'>
          back Home
        </Link>
      </div>
    );
  }

  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className='section-center'>
      <div className='singleCocktail'>
        <div className='cocktail-info'>
          <h4>
            Name:
            <span>{name}</span>
          </h4>
          <p>
            Contains:
            <span>{info} ingredients</span>
          </p>
          <p>
            Category:
            <span>{category}</span>
          </p>
          <p>
            Glass:
            <span>{glass}</span>
          </p>
          <p>
            Instructions:
            <span>{instructions}</span>
          </p>
          <ul className='ingredients'>
            {ingredients.map((item, index) => {
              return item ? (
                <li key={index} className='ingredient'>
                  <a
                    href={`https://www.google.com/search?q=${item}`}
                    target='_blank'
                  >
                    {item}
                  </a>
                </li>
              ) : null;
            })}
          </ul>

          <div className='btn-container'>
            <Link to={'/'} element={<Home />} className='btn'>
              back home
            </Link>
            <button
              className='btn'
              data-id={id}
              onClick={(e) => {
                let btnId = e.target.dataset.id;
                let inCart = userCocktails.find((item) => item.id === btnId);
                if (inCart) {
                  alert(
                    'You have already saved this cocktail in your favorites cocktails. Check favorites for more info about these drinks.'
                  );
                  return;
                } else {
                  saveUserCocktails(id, name, image);
                }
                document
                  .querySelector('.user-cocktails')
                  .classList.add('user-cocktails-show');
              }}
            >
              save drink
            </button>
          </div>
        </div>
        <figure className='cocktail-img'>
          <img src={image} alt={name} />
        </figure>
      </div>
    </section>
  );
};

export default SingleDrinks;

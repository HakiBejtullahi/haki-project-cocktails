import React from 'react';

const About = () => {
  return (
    <>
      <div className='about'>
        <h2 className='section-title about-title'>about page</h2>;
        <p className='about-text'>
          The API used in this project is from the website TheCocktailDB. All
          rights and responsibilites regarding the information about the drinks
          falls to{' '}
          <a href='https://www.thecocktaildb.com/api.php' target='_blank'>
            TheCocktailDB
          </a>{' '}
          are reserved for the I linked <a href=''></a>
        </p>
      </div>
    </>
  );
};

export default About;

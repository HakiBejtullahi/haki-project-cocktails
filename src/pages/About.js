import React from 'react';
import Table from '../components/Table';

const About = () => {
  return (
    <>
      <div className='about'>
        <h2 className='section-title about-title'>about page</h2>;
        <p className='about-text' style={{ marginBottom: '2rem' }}>
          The API used in this project is from the website{' '}
          <a
            href='https://www.thecocktaildb.com/api.php'
            target={'target:_blank'}
          >
            TheCocktailDB API
          </a>
          TheCocktailDB API. This site is just for testing my skills second time
          in react. The project is based on{' '}
          <a href='https://www.johnsmilga.com/' target={'target:_blank'}>
            JOHN SMILGA
          </a>
          's project{' '}
          <a
            href='https://react-projects-15-cocktails.netlify.app/'
            target={'target:_blank'}
          >
            React Project 15 cocktails
          </a>
          .
        </p>
        <h4 className='title-about'>Current Site version & Features</h4>
        <Table />
      </div>
    </>
  );
};

export default About;

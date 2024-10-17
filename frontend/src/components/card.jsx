import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, altText, projTitle ,content }) => {
  return (
    <div className='w-80 h-48 rounded-lg bg-gradient-to-tr from-sky-700 via-sky-500 to-sky-300 shadow-2xl shadow-sky-900'>
      <div className='w-16 h-16 absolute mt-[-20px] ml-[-15px] bg-sky-300 overflow-hidden drop-shadow-2xl shadow-inherit rounded-full rotate-[-42deg]'>
        <img src={image} alt={altText} className='w-full h-full object-cover rotate-[42deg]' />
      </div>
      <div className='sw-full h-full p-4 justify-center items-center'>
        <label className='text-center p-1'>{projTitle}</label>
        <div className='p-1 mt-1'> <p className='text-justify'>{content}</p></div> 
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  projTitle:  PropTypes.string.isRequired
};

export default Card;

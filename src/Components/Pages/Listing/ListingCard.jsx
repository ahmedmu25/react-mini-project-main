import React from 'react';

import PropTypes from 'prop-types';
const ListingCard = props => {
  return (
    <React.Fragment>
 
      <article className='pic_card pic_card--1 ps-0'>
        <div
          className='pic_card__img'
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundRepeat: 'no-repeat'
          }}
        />
        <a href='/listing' className='pic_card_link'>
          <div
            className='pic_card__img--hover'
            style={{
              backgroundImage: `url(${props.image === "" ? "./images/no-image.png": props.image})`,
              backgroundRepeat: 'no-repeat'
            }}
          />
        </a>
        <div className='pic_card__info'>
          <span style={{ marginLeft: '10px' }} className='pic_card__by'>
            <a href='/listing' className='pic_card__items'>
              {props.price}
            </a>
          </span>
          {<br />}
          {props.featured && (
            <span className='pic_card__category featured_card'>Featured</span>
          )}
          <h3 className='pic_card__title'>{props.name}</h3>
          <span className='pic_card__category'>
            {props.inventory ? (
              ` Items available:   ${props.inventory}`
            ) : (
              <span className='pic_card__category featured_card bg-danger text-white'>
                {'Not Available'}
              </span>
            )}
          </span>
          <br />
          <span className='pic_card__category'>
            Aisle:
            {props.aisle}
          </span>
        </div>
      </article>

    </React.Fragment>
  );
};

ListingCard.defaultProps = {
  aisle: 0,
  image: '',
  inventory: 0,
  featured: false
};
ListingCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  aisle: PropTypes.number,
  image: PropTypes.string.isRequired,
  inventory: PropTypes.number,
  featured: PropTypes.bool.isRequired
};

export default ListingCard;

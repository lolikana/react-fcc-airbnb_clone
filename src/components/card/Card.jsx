import React from 'react';
import cardDatas from './cardDatas';
import { RiStarSFill } from 'react-icons/ri';

const Card = () => {
  return (
    <section className="section-card">
      {cardDatas.map(
        (
          { image, statut, ratings, reviewsCount, country, title, price },
          index
        ) => {
          return (
            <div key={index} className="card-template">
              <div className="card-box">
                <img src={image} alt="" className="card-img" />
                <div className="card-statut">
                  <span
                    style={
                      statut === 'ONLINE'
                        ? { color: 'green' }
                        : { color: 'red' }
                    }
                  >
                    {statut}
                  </span>
                </div>
              </div>
              <div className="card-legend">
                <div>
                  <RiStarSFill fill="red" className="star-icon" />
                  {ratings}{' '}
                  <span>
                    ({reviewsCount})・{country}
                  </span>
                </div>
                <div className="card-title">{title}</div>
                <div className="card-price">
                  <strong>From ${price}</strong> / person
                </div>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
};

export default Card;

import React from 'react';
import { RiStarSFill } from 'react-icons/ri';

const CardTemplate = props => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'online') {
    badgeText = 'ONLINE COURSE';
  }
  return (
    <div className="card-template">
      <div className="card-box">
        <img src={props.image} alt="" className="card-img" />
        <div
          className="card-statut"
          style={
            badgeText === 'ONLINE COURSE'
              ? { color: 'green' }
              : { color: 'red' }
          }
        >
          {badgeText}
        </div>
      </div>
      <div className="card-legend">
        <div>
          <RiStarSFill fill="red" className="star-icon" />
          {props.stats.ratings.toFixed(1)}{' '}
          <span>
            ({props.stats.reviewsCount})・{props.location}
          </span>
        </div>
        <div className="card-title">{props.title}</div>
        <div className="card-price">
          <strong>
            From {'$'}
            {props.price}
          </strong>{' '}
          / person
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;

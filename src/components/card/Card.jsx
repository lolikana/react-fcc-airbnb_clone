import React from 'react';
import Card1 from './../../images/Airbnb Cards/image 12.png';
import Card2 from './../../images/Airbnb Cards/mountain-bike 1.png';
import Card3 from './../../images/Airbnb Cards/wedding-photography 1.png';
import { RiStarSFill } from 'react-icons/ri';

const cardDatas = [
  {
    image: Card1,
    statut: 'SOLD OUT',
    stars: '5.0',
    reviews: ' (6)',
    place: 'USA',
    info: 'Life lessins with Katie Zaferes',
    price: '136',
  },
  {
    image: Card3,
    statut: 'ONLINE',
    stars: '5.0',
    reviews: ' (3)',
    place: 'USA',
    info: 'Learn wedding photography',
    price: '125',
  },
  {
    image: Card2,
    statut: 'ONLINE',
    stars: '4.8',
    reviews: ' (2)',
    place: 'USA',
    info: 'Group Mountain Biking',
    price: '50',
  },
];


const Card = () => {
  return (
    <section className="section-card">
      {cardDatas.map(
        ({ image, statut, stars, reviews, place, info, price }, index) => {
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
                  {stars}{' '}
                  <span>
                    {reviews}・{place}
                  </span>
                </div>
                <div className="card-info">{info}</div>
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

import React from 'react';
import CardsData from './CardsData';
import CardTemplate from './CardTemplate';

const Card = () => {
  return (
    <section className="section-card">
      {CardsData &&
        CardsData.map((item, index) => <CardTemplate key={index} {...item} />)}
    </section>
  );
};

// const Card = () => {
//   const cardsData = CardsData.map((item, index) => {
//     return <CardTemplate key={index} {...item} />;
//   });
//   return <section className="section-card">{cardsData}</section>;
// };

export default Card;

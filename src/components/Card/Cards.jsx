import React, { useEffect, useState } from "react";

import axios from "axios";
import Card from "./Card";

import { StyleCardsGrid } from "./Cards.style";

export const Cards = () => {
  //Cards JSON object
  const [cards, setCards] = useState([]);

  //Get cards from JSON API
  const getCards = async () => {
    try {
      axios
        .get("http://localhost:3000/cards")
        .then((res) => setCards(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    //Calling getCards on mount
    getCards();
    return () => {};
  }, []);

  return (
    <StyleCardsGrid>
      {cards.map((card, i) => {
        return (
          <Card
            key={i}
            id={card.id}
            title={card.title}
            published={card.published}
            user={card.user}
            rating={card.rating}
          />
        );
      })}
    </StyleCardsGrid>
  );
};

export default Cards;

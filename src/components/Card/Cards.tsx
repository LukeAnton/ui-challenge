import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { StyleCardsGrid } from "../../styles/Cards.style";

export const Cards: React.FC = () => {
  //Cards JSON object
  const [cards, setCards] = useState<[]>([]);

  //Get cards from JSON API
  const getCards = async () => {
    try {
      await axios
        .get("http://localhost:3000/cards")
        .then(({ data }) => setCards(data));
    } catch (err) {
      console.error(err);
    }
  };

  //Calling api on mount
  useEffect(() => {
    getCards();
  }, []);

  return (
    <StyleCardsGrid>
      {cards.map(({ title, published, user, rating, id }) => {
        return (
          <Card
            title={title}
            published={published}
            user={user}
            rating={rating}
            id={id}
            key={id}
          />
        );
      })}
    </StyleCardsGrid>
  );
};

export default Cards;

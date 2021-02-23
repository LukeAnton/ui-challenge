import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

import { StyleCardsGrid } from "./Cards.style";

export const Cards = () => {
  //Cards JSON object
  const [cards, setCards] = useState([]);

  //Calling the cards server
  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/LukeAnton/mock-server/data")
      .then((res) => setCards(res.data.cards));
    console.log(cards);
    return () => {};
  }, []);

  return (
    <StyleCardsGrid>
      {cards.map((card) => {
        return (
          <Card
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

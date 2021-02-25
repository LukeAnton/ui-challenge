import React, { useEffect, useState } from "react";
// import axios from "axios";
import Card from "./Card";
import { getCards } from "../../api/getCards";
import { StyleCardsGrid } from "../../styles/Cards.style";

export const Cards = () => {
  //Cards JSON object
  const [cards, setCards] = useState([]);

  // //Get cards from JSON API
  // const getCards = async () => {
  //   try {
  //     await axios
  //       .get("http://localhost:3000/cards")
  //       .then((res) => setCards(res.data));
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  //Calling api on mount
  useEffect(() => {
    console.log(getCards());
  }, []);

  return (
    <StyleCardsGrid style={{ height: "100%" }}>
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

import React, { useEffect, useContext } from "react";
import CardContext from "../../context/card/cardContext";
import Card from "./Card";
import { CardsTypes } from "../../typescript/interface/card";

//Style imports
import { StyleCardsGrid } from "../../styles/Cards.style";

export const Cards: React.FC = () => {
  //Cards JSON object
  const cardContext = useContext(CardContext);
  const { cards, getCards } = cardContext;

  //Calling api on mount
  useEffect(() => {
    getCards();
  }, []);

  return (
    <StyleCardsGrid>
      {cards.map((card: CardsTypes) => {
        const title: string = card.title;
        const published: boolean = card.published;
        const user: string = card.user;
        const rating: number = card.rating;
        const id: number = card.id;
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

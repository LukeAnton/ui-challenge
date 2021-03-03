import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import CardContext from "../../context/cardContext";
import Card from "./Card";
//Style imports
import { StyleCardsGrid } from "../../styles/Cards.style";
interface CardsTypes {
  title: string;
  published: boolean;
  user: string;
  rating: number;
  id: number;
}
export const Cards: React.FC<CardsTypes> = () => {
  //Cards JSON object
  const cardContext = useContext(CardContext);
  const { cards, getCards } = cardContext;

  //Calling api on mount
  useEffect(() => {
    getCards();
  }, []);

  return (
    <StyleCardsGrid>
      {cards.map((card: any) => {
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

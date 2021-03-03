import React, { useReducer } from "react";
import axios from "axios";

import CardContext from "./cardContext";
import CardReducer from "./CardReducer";

import { calculateRating } from "../../functions/functions";

const CardState = (props) => {
  const initState = {
    cards: [],
  };

  //This is used to pass to the CardReducer
  const [state, dispatch] = useReducer(CardReducer, initState);

  // Get Cards
  const getCards = async () => {
    try {
      const res = await axios.get("http://localhost:3000/cards");
      dispatch({
        type: "GET_CARDS",
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Add Rating
  const addRating = async (title, published, user, id, item, fullStarCount) => {
    const totalRating = calculateRating(item, fullStarCount);

    try {
      axios.put(`http://localhost:3000/cards/${id}`, {
        title: title,
        published: published,
        user: user,
        rating: totalRating,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CardContext.Provider
      value={{
        cards: state.cards,
        getCards,
        addRating,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;

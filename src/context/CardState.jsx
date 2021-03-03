import React, { useReducer } from "react";
import axios from "axios";

import CardContext from "./cardContext";
import CardReducer from "./CardReducer";

const CardState = (props) => {
  const initState = {
    cards: [],
  };

  //This is used to pass to the CardReducer
  const [state, dispatch] = useReducer(CardReducer, initState);

  // Get Contacts
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

  return (
    <CardContext.Provider
      value={{
        cards: state.cards,
        getCards,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;

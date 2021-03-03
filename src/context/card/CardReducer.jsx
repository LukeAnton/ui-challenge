export default (state, action) => {
  switch (action.type) {
    case "GET_CARDS":
      return {
        ...state,
        cards: action.payload,
      };
    case "ADD_RATING":
      return {
        ...state,
        cards: [action.payload, ...state.cards],
      };
    default:
      return state;
  }
};

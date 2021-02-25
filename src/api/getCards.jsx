import axios from "axios";
//Cards JSON object
//Get cards from JSON API
// export const getCards = async () => {
//   try {
//     const resp = await axios.get("http://localhost:3000/cards");
//     const data = resp.data;
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// };
export const getCards = async () => {
  return await axios.get("http://localhost:3000/cards").then((res) => {
    return res.data;
  });
};

export default getCards;

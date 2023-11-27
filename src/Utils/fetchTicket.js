import { QUICKSELL_API } from "./constants";

const API_URL = QUICKSELL_API;

export const fetchTickets = async () => {
  const data = await fetch(API_URL);

  const json = await data.json();
  console.log("Success");
  // console.log("You are viewing this from the Utils",json);
  return json;
};

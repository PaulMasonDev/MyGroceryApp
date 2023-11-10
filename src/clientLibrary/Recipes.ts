import { BACKEND_API } from "../constants";

export const getRecipes = async () => {
  try {
    const response = await fetch(`${BACKEND_API}/recipe`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    alert(`Error: An error occurred .`);
    return {};
  }
};

import { BACKEND_API } from "../constants";
import { Recipe } from "../utils/store";

export const createRecipe = async (recipe: Omit<Recipe, "id">) => {
  try {
    const response = await fetch(`${BACKEND_API}/recipe`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });
    const data = await response.json();
    console.log({ data });
  } catch (error) {
    console.error(error);
  }
};

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

export const deleteRecipe = async (recipeId: number) => {
  try {
    const response = await fetch(`${BACKEND_API}/recipe/${recipeId}`, {
      method: "DELETE",
      credentials: "include",
    });
    const data = await response.json();
    console.log({ data });
  } catch (error) {
    console.error(error);
  }
};

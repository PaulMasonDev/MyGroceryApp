// src/store/index.ts
import create from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Recipe from "../models/Recipe";
import Ingredient from "../models/Ingredient";

type Store = {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  addIngredient: (recipeName: string, ingredient: Ingredient) => void;
  loadRecipes: () => Promise<void>;
};

const useStore = create<Store>((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, recipe];
      AsyncStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      return { recipes: updatedRecipes };
    }),
  addIngredient: (recipeName, ingredient) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.name === recipeName
          ? new Recipe(recipe.name, recipe.description, [
              ...recipe.ingredients,
              ingredient,
            ])
          : recipe
      );
      AsyncStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      return { recipes: updatedRecipes };
    }),
  loadRecipes: async () => {
    const savedRecipes = await AsyncStorage.getItem("recipes");
    if (savedRecipes) {
      set({ recipes: JSON.parse(savedRecipes) });
    }
  },
}));

export default useStore;

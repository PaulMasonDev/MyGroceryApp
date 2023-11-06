// src/models/Recipe.ts
import Ingredient from "./Ingredient";

class Recipe {
  constructor(
    public name: string,
    public description: string,
    public ingredients: Ingredient[] = []
  ) {}
}

export default Recipe;

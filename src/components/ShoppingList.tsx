// src/components/ShoppingList.tsx

import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import useStore from "../store";
import Recipe from "../models/Recipe";
import Ingredient from "../models/Ingredient";

const ShoppingList: React.FC = () => {
  const [shoppingList, setShoppingList] = useState<Ingredient[]>([]);
  const recipes = useStore((state) => state.recipes);

  const addRecipeToShoppingList = (recipe: Recipe) => {
    setShoppingList((currentList) => [...currentList, ...recipe.ingredients]);
  };

  const { loadRecipes, saveRecipes } = useStore();

  useEffect(() => {
    loadRecipes();
  }, []);

  return (
    <View>
      {recipes.map((recipe, index) => (
        <View key={index}>
          <Button
            title={`Add ${recipe.name}`}
            onPress={() => addRecipeToShoppingList(recipe)}
          />
          <Button title="Save Recipes" onPress={() => saveRecipes(recipes)} />
        </View>
      ))}
      {shoppingList.map((ingredient, index) => (
        <Text
          key={index}
        >{`${ingredient.name}: ${ingredient.quantity} ${ingredient.unit}`}</Text>
      ))}
    </View>
  );
};

export default ShoppingList;

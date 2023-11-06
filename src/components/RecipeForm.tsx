// src/components/RecipeForm.tsx
import { View, TextInput, Button } from "react-native";
import useStore from "../store";
import Recipe from "../models/Recipe";
import { useState } from "react";
import React from "react";
import IngredientForm from "./IngredientForm/IngredientForm";

const RecipeForm: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const addRecipe = useStore((state) => state.addRecipe);

  const handleSubmit = () => {
    const newRecipe = new Recipe(name, description);
    addRecipe(newRecipe);
  };

  return (
    <View>
      <TextInput
        placeholder="Recipe Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add Recipe" onPress={handleSubmit} />
      {name && <IngredientForm recipeName={name} />}
    </View>
  );
};

export default RecipeForm;

// src/components/IngredientForm.tsx
import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import useStore from "../../store";
import Ingredient from "../../models/Ingredient";

type IngredientFormProps = {
  recipeName: string;
};

const IngredientForm: React.FC<IngredientFormProps> = ({ recipeName }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const addIngredient = useStore((state) => state.addIngredient);

  const handleSubmit = () => {
    const newIngredient = new Ingredient(name, parseFloat(quantity), unit);
    addIngredient(recipeName, newIngredient);
  };

  return (
    <View>
      <TextInput
        placeholder="Ingredient Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <TextInput placeholder="Unit" value={unit} onChangeText={setUnit} />
      <Button title="Add Ingredient" onPress={handleSubmit} />
    </View>
  );
};

export default IngredientForm;

import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import useUserStore from "../../utils/store";
import { createRecipe } from "../../clientLibrary/Recipes";
import { getUserInfo } from "../../clientLibrary/Auth";

const RecipeAdd: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { setUser, setLoading } = useUserStore();

  const handleSubmit = async () => {
    if (!name.trim() || !description.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);
    await createRecipe({ name, description });
    setUser(await getUserInfo());
    setLoading(false);
    setName("");
    setDescription("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Recipe Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Add Recipe" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default RecipeAdd;

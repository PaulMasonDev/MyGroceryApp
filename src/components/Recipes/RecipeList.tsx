import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import useUserStore from "../../utils/store";
import { deleteRecipe } from "../../clientLibrary/Recipes";
import { getUserInfo } from "../../clientLibrary/Auth";

const RecipeList: React.FC = () => {
  const { recipes, setUser, setLoading } = useUserStore();

  const handleDeleteRecipe = async (recipeId: number) => {
    setLoading(true);
    await deleteRecipe(recipeId);
    setUser(await getUserInfo());
    setLoading(false);
  };

  return (
    <FlatList
      style={styles.recipeList}
      data={recipes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.recipeItem}>
          <Text style={styles.recipeName}>{item.name}</Text>
          <Text style={styles.recipeDescription}>{item.description}</Text>
          {item.id && (
            <Button
              title="Delete"
              color="red"
              onPress={() => handleDeleteRecipe(item.id)}
            />
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  recipeList: {
    flex: 1,
    padding: 10,
  },
  recipeItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 15,
  },
  recipeName: {
    fontSize: 24, // Larger font size for the recipe name
    color: "#333",
    marginBottom: 10,
  },
  recipeDescription: {
    fontSize: 16, // Smaller font size for the description
    color: "#666",
  },
});

export default RecipeList;

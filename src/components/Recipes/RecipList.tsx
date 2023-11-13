import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import useUserStore from "../../utils/store";

interface Recipe {
  id: number;
  name: string;
  description: string;
}

const RecipeList: React.FC = () => {
  const { user } = useUserStore();
  const [recipes, setRecipes] = useState(user.recipes);

  useEffect(() => {
    if (user != null) setRecipes(user.recipes);
  }, [user]);

  //TODO: Figure out the best way to refresh recipes. From user object or direct get.
  return (
    <FlatList
      style={styles.recipeList}
      data={recipes}
      keyExtractor={(item, index) => item.id?.toString() || `item-${index}`}
      renderItem={({ item }) => (
        <View style={styles.recipeItem}>
          <Text style={styles.recipeName}>{item.name}</Text>
          <Text style={styles.recipeDescription}>{item.description}</Text>
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

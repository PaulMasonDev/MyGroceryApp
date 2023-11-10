import { useEffect } from "react";
import { View, Text } from "react-native";
import { getRecipes } from "../../clientLibrary/Recipes";

const RecipeList: React.FC = () => {
  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes();
      console.log(data);
    };
    fetchRecipes();
  }, []);

  // TODO: Need to make sure the data loads after logging in.

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default RecipeList;

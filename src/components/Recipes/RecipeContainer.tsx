import { View, StyleSheet } from "react-native";
import RecipeList from "./RecipeList";
import useUserStore from "../../utils/store";
import RecipeAdd from "./RecipeAdd";

const RecipeContainer: React.FC = () => {
  const { isLoggedIn } = useUserStore();
  return isLoggedIn ? (
    <View style={styles.container}>
      <RecipeAdd />
      <RecipeList />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RecipeContainer;

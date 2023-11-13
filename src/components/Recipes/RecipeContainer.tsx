import { View } from "react-native";
import RecipeList from "./RecipList";
import useUserStore from "../../utils/store";

const RecipeContainer: React.FC = () => {
  const { isLoggedIn } = useUserStore();
  return isLoggedIn ? (
    <View>
      <RecipeList />
    </View>
  ) : null;
};

export default RecipeContainer;

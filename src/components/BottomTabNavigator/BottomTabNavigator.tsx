// src/navigation/BottomTabNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Auth from "../Auth/Auth";
import RecipeContainer from "../Recipes/RecipeContainer";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Recipes"
      screenOptions={({ route }) => ({})}
    >
      <Tab.Screen
        name="Auth"
        component={Auth}
        options={{ tabBarAccessibilityLabel: "Auth" }}
      />
      <Tab.Screen
        name="Recipes"
        component={RecipeContainer}
        options={{ tabBarAccessibilityLabel: "Recipes" }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

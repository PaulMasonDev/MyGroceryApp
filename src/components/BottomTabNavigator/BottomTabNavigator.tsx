// src/navigation/BottomTabNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import RecipeForm from "../RecipeForm";
import ShoppingList from "../ShoppingList";
import Register from "../Register/Register";
import { LoginScreen, LogoutScreen } from "../Login/Login";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Login" screenOptions={({ route }) => ({})}>
      <Tab.Screen
        name="Recipe Form"
        component={RecipeForm}
        options={{ tabBarAccessibilityLabel: "Recipe Form" }}
      />
      <Tab.Screen
        name="Shopping List"
        component={ShoppingList}
        options={{ tabBarAccessibilityLabel: "Shopping List" }}
      />
      <Tab.Screen
        name="Registration"
        component={Register}
        options={{ tabBarAccessibilityLabel: "Register" }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{ tabBarAccessibilityLabel: "Login" }}
      />
      <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{ tabBarAccessibilityLabel: "Logout" }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

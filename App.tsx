import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import BottomTabNavigator from "./src/components/BottomTabNavigator/BottomTabNavigator";

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <BottomTabNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    maxWidth: 450,
  },
});

export default App;

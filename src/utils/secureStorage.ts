import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const platform = Platform.OS;

export const saveValue = async (key: string, value: string) => {
  if (platform !== "web") {
    await SecureStore.setItemAsync(key, value);
  }
};

export const retrieveValue = async (key: string) => {
  if (platform !== "web") {
    await SecureStore.getItemAsync(key);
  }
};

export const removeValue = async (key: string) => {
  if (platform !== "web") {
    await SecureStore.deleteItemAsync(key);
  }
};

import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import {
  handleLogin,
  handleRegistration,
  handleLogout,
  getUserInfo,
} from "../../clientLibrary/Auth";
import useUserStore from "../../utils/store";

const AuthScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser, logout } = useUserStore();

  const isAuthenticated = (user && !!user.username) || false;

  const handleLoginSubmit = async () => {
    const data = await handleLogin({ username, password });
    if (data && data.access_token) {
      const userInfo = await getUserInfo();
      setUser(userInfo);
    }
  };

  const handleRegisterSubmit = async () => {
    await handleRegistration({ username, password });
    const userInfo = await getUserInfo();
    if (userInfo.username) setUser(userInfo);
  };

  const handleLogoutSubmit = () => {
    handleLogout();
    setUser(null);
    logout();
  };

  if (!isAuthenticated) {
    return (
      <View style={styles.container}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
        <Button title="Log In" onPress={handleLoginSubmit} />
        <Button title="Register" onPress={handleRegisterSubmit} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button title="Log Out" onPress={handleLogoutSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AuthScreen;

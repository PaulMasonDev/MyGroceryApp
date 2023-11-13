import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { setUser, logout } = useUserStore();

  const handleLoginSubmit = async () => {
    const data = await handleLogin({ username, password });
    if (data && data.access_token) {
      setIsAuthenticated(true);
    }
    const userInfo = await getUserInfo();
    setUser(userInfo);
  };

  const handleRegisterSubmit = async () => {
    const token = await handleRegistration({ username, password });
    console.log(token);
    if (token) {
      setIsAuthenticated(true);
    }
  };

  const handleLogoutSubmit = async () => {
    handleLogout();
    logout();
    setIsAuthenticated(false);
  };

  return (
    <View style={styles.container}>
      {!isAuthenticated ? (
        <>
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
        </>
      ) : (
        <>
          <Button title="Log Out" onPress={handleLogoutSubmit} />
        </>
      )}
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

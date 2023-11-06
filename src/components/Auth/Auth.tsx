import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import {
  handleLogin,
  handleRegistration,
  handleLogout,
  getMe,
} from "../../clientLibrary/Auth";

const AuthScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [title, setTitle] = useState("");

  const handleLoginSubmit = async () => {
    const data = await handleLogin({ username, password });
    alert(data.detail);
    if (data && data.access_token) {
      setIsAuthenticated(true);
    }
  };

  const handleRegisterSubmit = async () => {
    const token = await handleRegistration({ username, password });
    console.log(token);
    if (token) {
      setIsAuthenticated(true);
    }
  };

  const handleGetMe = async () => {
    const values = await getMe();
    if (values.settings && values.settings.title) {
      setTitle(values.settings.title);
    }
  };

  const handleLogoutSubmit = async () => {
    handleLogout();
    setIsAuthenticated(false);
    setTitle("");
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
          <Button title="Get Settings" onPress={handleGetMe} />
          <Button title="Log Out" onPress={handleLogoutSubmit} />
          {title && <Text>{title}</Text>}
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

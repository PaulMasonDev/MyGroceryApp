import { useState } from "react";
import {
  getUserInfo,
  handleLogin,
  handleLogout,
} from "../../clientLibrary/Auth";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { removeValue } from "../../utils/secureStorage";

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    await handleLogin({ username, password });
    const response = await getUserInfo();
    console.log({ response });
  };

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
      <Button title="Log In" onPress={handleSubmit} />
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

const LogoutScreen: React.FC = () => {
  const handleSubmit = async () => {
    await removeValue("authToken");
    handleLogout();
  };

  return <Button title="Log Out" onPress={handleSubmit} />;
};
export { LoginScreen, LogoutScreen };

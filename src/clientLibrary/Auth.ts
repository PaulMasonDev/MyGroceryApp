import { BACKEND_API } from "../constants";
import { saveValue } from "../utils/secureStorage";

export const getMe = async () => {
  // /users/me/
  try {
    // API call to your backend registration route
    const response = await fetch(`${BACKEND_API}/auth/users/me/`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    alert(`Error: An error occurred .`);
    return {};
  }
};

interface HandleRegistrationProps {
  username: string;
  password: string;
}

export const handleRegistration = async ({
  username,
  password,
}: HandleRegistrationProps) => {
  try {
    // API call to your backend registration route
    const response = await fetch(`${BACKEND_API}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.status === 400) {
      alert(data.detail);
    }
    if (response.status === 200) {
      alert(`Successfully Registered: ${data.username}`);
    }
    return data;
  } catch (error) {
    console.error(error);
    // Handle network errors or show a generic error message
    alert(`Error: An error occurred during registration.`);
    return {};
  }
};

interface HandleLoginProps {
  username: string;
  password: string;
}

export const handleLogin = async ({ username, password }: HandleLoginProps) => {
  try {
    const response = await fetch(`${BACKEND_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      credentials: "include",
      body: `username=${encodeURIComponent(
        username
      )}&password=${encodeURIComponent(password)}`,
    });

    const data = await response.json();
    if (response.ok) {
      await saveValue("authToken", data.access_token);
      //   onLoginSuccess();
    } else {
      alert("Login Failed, Incorrect username or password");
    }
  } catch (error) {
    console.error(error);
    alert("Error, An error occurred during login.");
  }
};

export const handleLogout = async () => {
  try {
    const response = await fetch(`${BACKEND_API}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      credentials: "include",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    alert("Error, An error occurred during login.");
  }
};

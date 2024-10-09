import { Box, Button } from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuthStore } from "../../../store/useAuthStore";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  // Initiating the Google login flow to get an access token
  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => handleLoginSuccess(tokenResponse),
    onError: () => console.error("Google Login Failed"), // Handle login failure
    scope:
      "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile", // Adjust scopes as needed
  });

  // Handle the response after successful login
  const handleLoginSuccess = (tokenResponse) => {
    console.log("Access Token:", tokenResponse.access_token); // You now have the access token!

    const clientSecret = import.meta.env.VITE_APP_CLIENT_SECRET_BE;
    const clientId = import.meta.env.VITE_APP_CLIENT_ID_BE;
    const baseUrl = import.meta.env.VITE_BE_BASE_URL;

    // Send the access token to your backend for verification or further processing
    fetch(`${baseUrl}/api/v1/users/auth/convert-token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "convert_token",
        client_id: clientId,
        client_secret: clientSecret,
        backend: "google-oauth2",
        token: tokenResponse.access_token, // Now sending the access token instead of ID token
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login Successful", data);
        login(data.user); // Update Zustand store with user data
        navigate("/");
      })
      .catch((error) => console.error("Login error", error));
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {/* Button to trigger Google Login */}
      <Button
        leftIcon={<FcGoogle />}
        variant={"outline"}
        color={"rgb(56,114,210)"}
        onClick={() => loginWithGoogle()}
      >
        Sign in with Google
      </Button>
    </Box>
  );
};

export default LoginScreen;

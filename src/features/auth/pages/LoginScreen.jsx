import { Box } from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";
import { useAuthStore } from "../../../store/useAuthStore";

const LoginScreen = () => {
  const login = useAuthStore((state) => state.login);

  const handleLoginSuccess = (credentialResponse) => {
    console.log("Google User:", credentialResponse);
    const clientSecret = import.meta.env.VITE_GOOGLE_CLIENT_SECRET_BE;
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID_BE;

    fetch("http://44.227.111.220/api/v1/users/auth/convert-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "convert_token",
        client_id: clientId,
        client_secret: clientSecret,
        backend: "google-oauth2",
        token: credentialResponse.credential,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login Successful", data);
        login(data.user);
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
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => console.log("Login Failed")}
      />
    </Box>
  );
};

export default LoginScreen;

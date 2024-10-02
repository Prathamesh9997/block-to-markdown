import { Box } from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";
import { useAuthStore } from "../../../store/useAuthStore";

const LoginScreen = () => {
  const login = useAuthStore((state) => state.login);

  const handleLoginSuccess = (credentialResponse) => {
    // const decoded = jwt_decode(credentialResponse.credential);
    console.log("Google User:", credentialResponse);
    const clientSecret = import.meta.env.VITE_GOOGLE_CLIENT_SECRET;

    // Call your backend API to handle login
    fetch("http://127.0.0.1:8000/api/v1/users/auth/convert-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "convert_token",
        client_id: credentialResponse.clientId,
        client_secret: clientSecret,
        backend: "google-oauth2",
        token: credentialResponse.credential,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        login(data.user);
        console.log("Login Successful", data);
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

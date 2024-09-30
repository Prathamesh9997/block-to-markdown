import { Box } from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";
import { useAuthStore } from "../../../store/useAuthStore";

const LoginScreen = () => {
  const login = useAuthStore((state) => state.login);

  const handleLoginSuccess = (credentialResponse) => {
    // const decoded = jwt_decode(credentialResponse.credential);
    console.log("Google User:", credentialResponse);

    // Call your backend API to handle login
    fetch("http://localhost:8000/api/auth/google/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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

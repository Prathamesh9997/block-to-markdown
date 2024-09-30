import { ChakraProvider, Box } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AppRoutes from "./routes/AppRoutes";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <ChakraProvider>
        <Box minH="100vh" bg="gray.50">
          <AppRoutes />
        </Box>
      </ChakraProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

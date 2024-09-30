import { ChakraProvider, Box } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AppRoutes from "./routes/AppRoutes";

const GOOGLE_CLIENT_ID =
  "561334803370-3jntct9vdq9e1rp9f6vbdo306t12na4q.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <ChakraProvider>
        <Box minH="100vh" bg="gray.50">
          <AppRoutes />
        </Box>
      </ChakraProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

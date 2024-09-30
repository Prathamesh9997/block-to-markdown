import { useState, useEffect } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import apiKeyService from "../../../services/apiKeyService";
import ApiKeyTable from "../components/ApiKeyTable";

const ApiKeysPage = () => {
  const [apiKeys, setApiKeys] = useState([]);

  // Fetch the API keys on page load
  useEffect(() => {
    const fetchApiKeys = async () => {
      const keys = await apiKeyService.fetchApiKeys();
      setApiKeys(keys);
    };
    fetchApiKeys();
  }, []);

  const handleCreateApiKey = async () => {
    const newKey = await apiKeyService.createApiKey();
    setApiKeys([...apiKeys, newKey]);
  };

  return (
    <Box p={6}>
      <Heading mb={4}>API Keys</Heading>
      <Text mb={4}>
        API keys are used to authenticate requests to the API. Keep your keys
        safe and secure.
      </Text>
      <Button onClick={handleCreateApiKey} colorScheme="teal" mb={6}>
        Create New API Key
      </Button>
      <ApiKeyTable apiKeys={apiKeys} />
    </Box>
  );
};

export default ApiKeysPage;

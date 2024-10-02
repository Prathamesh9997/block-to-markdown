import { useState, useEffect } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import apiKeyService from "../../../services/apiKeyService";
import ApiKeyTable from "../components/ApiKeyTable";
import { useProjectStore } from "@store/projectStore"; // Zustand store for selected project

const ApiKeysPage = () => {
  const [apiKeys, setApiKeys] = useState([]);
  const { selectedProject } = useProjectStore(); // Get selected project from Zustand

  // Fetch the API keys for the selected project on page load or when selectedProject changes
  useEffect(() => {
    const fetchApiKeys = async () => {
      if (selectedProject) {
        const keys = await apiKeyService.fetchApiKeys(selectedProject);
        setApiKeys(keys);
      }
    };
    fetchApiKeys();
  }, [selectedProject]);

  const handleCreateApiKey = async () => {
    if (selectedProject) {
      const newKey = await apiKeyService.createApiKey(selectedProject);
      setApiKeys([...apiKeys, newKey]);
    }
  };

  return (
    <Box p={6}>
      <Heading mb={4}>API Keys for Project: {selectedProject}</Heading>
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

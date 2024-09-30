import { useState } from "react";
import { Tr, Td, Button, IconButton, useClipboard } from "@chakra-ui/react";
import { FaCopy, FaTrash } from "react-icons/fa";
import apiKeyService from "../../../services/apiKeyService";

const ApiKeyRow = ({ apiKey }) => {
  const { onCopy } = useClipboard(apiKey.key);
  const [showKey, setShowKey] = useState(false);

  const handleDelete = async () => {
    await apiKeyService.deleteApiKey(apiKey.id);
    window.location.reload(); // Refresh the page after deletion
  };

  return (
    <Tr>
      <Td>{apiKey.name}</Td>
      <Td>{new Date(apiKey.created).toLocaleDateString()}</Td>
      <Td>
        {apiKey.lastUsed
          ? new Date(apiKey.lastUsed).toLocaleDateString()
          : "Never"}
      </Td>
      <Td>
        <Button size="sm" onClick={() => setShowKey(!showKey)} mr={2}>
          {showKey ? apiKey.key : "Show Key"}
        </Button>
        <IconButton
          size="sm"
          aria-label="Copy API Key"
          icon={<FaCopy />}
          onClick={onCopy}
          mr={2}
        />
        <IconButton
          size="sm"
          aria-label="Delete API Key"
          icon={<FaTrash />}
          onClick={handleDelete}
          colorScheme="red"
        />
      </Td>
    </Tr>
  );
};

export default ApiKeyRow;

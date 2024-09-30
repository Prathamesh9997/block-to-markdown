// src/services/apiKeyService.js

// Mock API keys data
const mockApiKeys = [
  {
    id: "1",
    name: "Development Key",
    key: "sk-XXXX-XXXX",
    created: new Date().toISOString(),
    lastUsed: null,
  },
  {
    id: "2",
    name: "Production Key",
    key: "sk-YYYY-YYYY",
    created: new Date().toISOString(),
    lastUsed: new Date().toISOString(),
  },
];

const fetchApiKeys = async () => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockApiKeys);
    }, 500);
  });
};

const createApiKey = async () => {
  // Simulate creating a new API key
  const newKey = {
    id: Math.random().toString(36).substr(2, 9),
    name: "New API Key",
    key: `sk-${Math.random().toString(36).substr(2, 8)}-${Math.random()
      .toString(36)
      .substr(2, 8)}`,
    created: new Date().toISOString(),
    lastUsed: null,
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newKey);
    }, 500);
  });
};

const deleteApiKey = async (id) => {
  // Simulate deleting an API key
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

const apiKeyService = {
  fetchApiKeys,
  createApiKey,
  deleteApiKey,
};

export default apiKeyService;

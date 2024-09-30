import { Box, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import ApiKeyRow from "./ApiKeyRow";

const ApiKeyTable = ({ apiKeys }) => {
  return (
    <Box border="1px" borderColor="gray.200" borderRadius="md" p={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Created</Th>
            <Th>Last Used</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {apiKeys.map((key) => (
            <ApiKeyRow key={key.id} apiKey={key} />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ApiKeyTable;

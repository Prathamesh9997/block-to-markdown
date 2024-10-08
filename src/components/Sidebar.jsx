import { Box, VStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box w="200px" bg="gray.800" color="white" minH="100vh" p={4}>
      <VStack align="start" spacing={4}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            width: "100%",
            backgroundColor: isActive ? "#2D3748" : "transparent", // Active state background color
            borderRadius: "6px",
          })}
        >
          <Text py={2} px={4} borderRadius="md" _hover={{ bg: "gray.700" }}>
            Dashboard
          </Text>
        </NavLink>
        <NavLink
          to="/api-keys"
          style={({ isActive }) => ({
            width: "100%",
            backgroundColor: isActive ? "#2D3748" : "transparent",
            borderRadius: "6px",
          })}
        >
          <Text py={2} px={4} borderRadius="md" _hover={{ bg: "gray.700" }}>
            API Keys
          </Text>
        </NavLink>
        <NavLink
          to="/activity-logs"
          style={({ isActive }) => ({
            width: "100%",
            backgroundColor: isActive ? "#2D3748" : "transparent",
            borderRadius: "6px",
          })}
        >
          <Text py={2} px={4} borderRadius="md" _hover={{ bg: "gray.700" }}>
            Activity Logs
          </Text>
        </NavLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;

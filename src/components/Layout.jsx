import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <Flex direction="column" maxH="100vh">
      <Header />
      <Flex flex="1" overflow="hidden">
        <Sidebar />
        <Box as="main" flex="1" p={6} bg="gray.100" overflowY={"auto"}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;

import { Box, Flex, Heading, Spacer, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box bg="gray.900" px={4} color="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md" marginLeft={4}>
          <Link to="/">BTM</Link>
        </Heading>
        <Spacer />
        <Flex alignItems="center">
          <>
            <Avatar
              size="sm"
              background={"white"}
              color={"black"}
              name={"A"}
              src={""}
            />
          </>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;

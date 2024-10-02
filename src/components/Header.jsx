import {
  Box,
  Flex,
  Heading,
  Spacer,
  Avatar,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProjectStore } from "../store/projectStore";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
  const { projects, selectedProject, setSelectedProject } = useProjectStore();

  const handleProjectChange = (id) => {
    setSelectedProject(id);
  };

  return (
    <Box bg="gray.900" px={4} color="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md" w="200px">
          <Link to="/" style={{ marginLeft: "20px" }}>
            BTM
          </Link>
        </Heading>

        {/* <Select
          value={selectedProject}
          onChange={handleProjectChange}
          bg="gray.700"
          borderColor="gray.600"
          width="fit-content"
        >
          {projects.map((project) => (
            <option
              key={project.id}
              value={project.id}
              style={{
                backgroundColor: "gray.700",
                color: "black",
              }}
            >
              {project.name}
            </option>
          ))}
        </Select> */}
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<BiChevronDown />}
            bg="gray.700"
            color="white"
            _hover={{ bg: "gray.600" }}
            _focus={{ bg: "gray.600" }}
            _active={{ bg: "gray.600" }}
            w={200}
          >
            {projects.find((project) => project.id === selectedProject)?.name ||
              "Select Project"}
          </MenuButton>
          <MenuList bg="gray.700" borderColor="gray.600">
            {projects.map((project) => (
              <MenuItem
                key={project.id}
                onClick={() => handleProjectChange(project.id)}
                _hover={{ bg: "gray.600" }}
                _focus={{ bg: "gray.600" }}
                style={{ padding: "8px 16px", margin: "4px 0" }} // Increase spacing between options
                color="white"
                bg="gray.700"
              >
                {project.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
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

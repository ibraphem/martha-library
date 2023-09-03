import {
  Box,
  Divider,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { menu } from "../../data/app";
import logo from "../../assets/images/logo.jpg"

const Sidebar = () => {


  return (
    <Flex
      as={"nav"}
      pt={4}
      direction="column"
      w="20%"
      bgColor={"#124477"}
      h="100%"
      color={"white"}
      transition={"all 0.5s ease"}
      position={"fixed"}
      align={"center"}
      left={0}
      top={0}
      bottom={0}
      zIndex={100}
      display={["none", "none", "none", "flex"]}
    >
      <Image src={logo} w={"100px"} borderRadius={"50%"} px={4} />

      <Divider maxW={"80%"} my={3} />


      <List
        mt={5}
        spacing={5}
        alignSelf={"stretch"}
        sx={{
          "& svg": {
            width: "1.5rem",
            height: "1.5rem",
            "& + span": "inline"
          },
        }}
        overflowY={"auto"}
      >
        {menu?.map(({ name, link, icon }) => {
          return (
            <ListItem
              key={name}
              as={NavLink}
              to={link}
              py={3}
              display={"flex"}
              justify={"center"}
              position="relative"
            >
              {({ isActive }) => (
                <Flex
                  alignItems={"center"}
                  color={isActive && "white"}
                  minW={"80%"}
                  mx="auto"
                  gap={1}
                >
                  <Box
                    position={"absolute"}
                    left={0}
                    width={"full"}
                    height={"full"}
                    zIndex={-1}
                    bg={isActive && "#b5dffa"}
                  />
                  <ListIcon
                    flexShrink={0}
                    flexGrow={0}
                    flexBasis={"3.5rem"}
                    as={icon}
                    m={0}
                    // opacity={isCollapsed && !isActive && 0.5}
                  />
                  <Box as={"span"} flexGrow={1}>
                    {name}
                  </Box>
                </Flex>
              )}
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
};

export default Sidebar;

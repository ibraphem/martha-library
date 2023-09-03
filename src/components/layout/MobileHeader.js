import { useRef } from "react";
import {
  Box,
  Circle,
  Flex,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineBell, AiOutlineMenu } from "react-icons/ai";
import MobileSidebar from "./MobileSidebar";
import { useNavigate } from "react-router-dom";

const MobileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();

  return (
    <Flex
      h="5rem"
      bg="white"
      px={4}
      alignItems={"center"}
      position={"sticky"}
      top={0}
      zIndex={200}
      boxShadow={"0px 2px 10px 0px rgba(198, 198, 198, 0.25)"}
      justifyContent={"space-between"}
      display={["flex", "flex", "flex", "none"]}
    >
      <IconButton
        px={0}
        minW={"auto"}
        onClick={onOpen}
        icon={<AiOutlineMenu />}
        bg="transparent"
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
      />

      <Image
        src="/EFCC Logo.png"
        w={"87px"}
        px={4}
        cursor={"pointer"}
        onClick={() => navigate("/dashboard")}
      />

      <Box
        position={"relative"}
        onClick={() => navigate("/notifications")}
        cursor={"pointer"}
      >
        <Circle
          position={"absolute"}
          top={".2rem"}
          right={".3rem"}
          bg={"red"}
          size={".3rem"}
        />
        <AiOutlineBell size={"1.5rem"} />
      </Box>

      <MobileSidebar btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default MobileHeader;

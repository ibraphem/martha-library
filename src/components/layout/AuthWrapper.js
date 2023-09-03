import { Flex, Image } from "@chakra-ui/react";
import logo from "../../assets/images/logo.jpg";
import bg from "../../assets/images/bg.jpg";


const AuthWrapper = ({children}) => {
    return (
        <Flex w="full" h="100vh" overflow={"hidden"}>
        <Flex
          basis={[0, 0, "40%", "50%"]}
          h="full"
          shrink={"0"}
          position={"relative"}
          bg={"blackAlpha.900"}
        >
          <Image
            src={bg}
            w="full"
            h="full"
            objectFit={"fill"}
            position={"absolute"}
            opacity={"0.5"}
            top={0}
          />
        </Flex>
  
        <Flex
          h={"full"}
          w="full"
          justify={"center"}
          alignItems={"center"}
          position={"relative"}
          bgColor={"#124477"}
        >
          <Flex w={["90%", "80%", "90%", "55%"]} position={"relative"}>
            <Image
              src={logo}
              w={"120px"}
              position={"absolute"}
              left={"50%"}
              transform={"translateX(-50%) translateY(-50%)"}
              borderRadius="50%"
            />
  
            <Flex
              direction={"column"}
              bg={"white"}
              width={"full"}
              px={"1.5rem"}
              py="2rem"
              mt={"1.5rem"}
            >
              {children}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
};

export default AuthWrapper;
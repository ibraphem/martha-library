import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const PageTitle = ({ title }) => {
  return (
    <Flex
      h={"4rem"}
      bg="url('/Title-Rectangle.png'), linear-gradient(90deg, rgba(18,68,119,255) 0%, rgba(181,223,250,255) 100%)"
      backgroundSize={"100% 100%"}
      backgroundRepeat={"no-repeat"}
      px={[2, 4, 4, 8]}
      alignItems={"center"}
      position={"sticky"}
      top={"4rem"}
      zIndex={1}
    >
      <Text fontSize={["1.5rem"]} fontWeight={"bold"}>
        {title}
      </Text>
    </Flex>
  );
};

export default PageTitle;

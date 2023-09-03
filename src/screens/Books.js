import React, { useState } from "react";
import PageTitle from "../components/layout/PageTitle";
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { libraryList } from "../data/mock";
import { Checkbox } from "@chakra-ui/checkbox";

const Books = () => {
  const [show, setShow] = useState("");

  const onEnter = (id) => {
    setShow(id);
  };
  const onLeave = (id) => {
    setShow("");
  };

  return (
    <>
      <PageTitle title="Library" />

      <Box>
        <Grid mt={4} templateColumns="repeat(5, 1fr)" gap={10}>
          {libraryList.map(({ id, author, photo, heading }) => (
            <GridItem
              onMouseEnter={() => onEnter(Number(id))}
              onMouseLeave={() => onLeave(Number(id))}
              background="#E8E8E8"
              position="relative"
              padding={8}
              key={id}
            >
              <Checkbox
                position="absolute"
                top={5}
                left={2.5}
                size="sm"
                colorScheme="cyan"
                borderColor="#0405057C"
              />

              <Image src={photo} alt="book cover" boxSize="100%" />
              <Box
                position="absolute"
                bottom="5"
                left="2.5"
                right="2.5"
                background="white"
                paddingY={2}
                paddingX={4}
              >
                <Text fontSize="sm" fontWeight="bold" textAlign="center">
                  {heading}
                </Text>
                <Text
                  fontSize="smaller"
                  mb={1}
                  color="GrayText"
                  textAlign="center"
                >
                  {author}
                </Text>
                {show === id && (
                  <Box marginY={4}>
                    <Text fontSize="11px" color="gray.400">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content.
                    </Text>
                  </Box>
                )}
                <Divider />
                <Flex mt={1}>
                  <Text fontSize="smaller" color="GrayText">
                    Free
                  </Text>
                  <Spacer />
                  <Text fontSize="smaller" color="GrayText">
                    102 Pages
                  </Text>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Books;

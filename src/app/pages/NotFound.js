import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container
      w={"full"}
      flexDirection="column"
      display={"flex"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading color={'blackAlpha.700'} fontSize={"6xl"}>404</Heading>
      <Text color={'blackAlpha.700'} fontSize={"3xl"}>Page not found</Text>
    </Container>
  );
};

export default NotFound;

import React from "react";
import {
  Container,
  SimpleGrid,
  Box,
  Image,
  Badge,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Card = () => {
  const data = useSelector((state) => state.productReducer);

  return (
    <>
      <Container
        display={"flex"}
        justifyContent={"center"}
        maxW="900px"
      >
        <SimpleGrid
          columns={{ md: "3", sm: "1" }}
          m={2}
          justifyContent={{ sm: "center" }}
        >
          {data.items ? (
            data.items.map((item, idx) => {
              const { title, price, img } = item;
              return (
                <>
                  <Box
                    key={idx}
                    maxW="md"
                    borderWidth="1px"
                    borderRadius="lg"
                    m={2}
      
                    overflow="hidden"
                  >
                    <Image src={img} alt={""} />

                    <Box p="6">
                      <Box display="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                          New
                        </Badge>
                      </Box>

                      <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        noOfLines={1}
                      >
                        {title}
                      </Box>

                      <Box>{price}</Box>

                      <Box
                        display="flex"
                        mt="2"
                        alignItems="center"
                        justifyContent={'space-between'}
                      >
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                          34 reviews
                        </Box>
                        {/*               <Button>Add to cart</Button>
                         */}

                        <Box as="span" mr="2" color="gray.600" fontSize="sm">
                          <Button colorScheme="pink" variant='outline'>cart</Button>{" "}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </>
              );
            })
          ) : (
            <Heading>Data is Not available</Heading>
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Card;

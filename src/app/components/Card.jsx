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
import { useSelector, useDispatch } from "react-redux";
import { addTOCart } from "../redux/action/action";
// import ProductCart from "./ProductCart";
import Category from "./Categories";

const Card = () => {
  const data = useSelector((state) => state.cardReducer);

  const dispatch = useDispatch();

  const Cart = (data) => {
    dispatch(addTOCart({data}));
  };

  return (
    <>
      <Container justifyContent={"center"} display={"flex"} maxW="80%">
        {/* CATEOGRY Component */}
        <Container
          mt={3}
          left={4}
          position="fixed"
          overflow={"hidden"}
          maxWidth={"20%"}
          shadow={'lg'}
          height={"480"}
          bg='#f8fffb'
          borderRadius={3}

        >
          <Category />
        </Container>

        {/* End */}

        {/* Product List */}
        <Container m={0} maxW="700">
          <SimpleGrid
            columns={{ md: "3", sm: "1" }}
            m={2}
            justifyContent={{ sm: "center" }}
          >
            {data.items ? (
              data.items.map((item, idx) => {
                const {id, title, price, img, desc } = item;
                return (
                  <>
                    <Box
                      key={idx}
                      maxW="300"
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
                          justifyContent={"space-between"}
                        >
                          <Box as="span" ml="2" color="gray.600" fontSize="sm">
                            34 reviews
                          </Box>
                          {/*               <Button>Add to cart</Button>
                           */}

                          <Box as="span" mr="2" color="gray.600" fontSize="sm">
                            <Button
                              onClick={() => Cart({
                                id, title, price, img, desc
                              })}
                              colorScheme="pink"
                              variant="outline"
                            >
                              cart
                            </Button>{" "}
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
        {/* Product List ends here */}

        {/* Add to cart component */}
        {/* <Container
          mt={3}
          right={4}
          position="fixed"
          overflow={"hidden"}
          shadow={'lg'}
          maxWidth={"20%"}
          borderRadius={3}
          bg='#f8fffb'

          height={"480"}
        >
          <ProductCart />
        </Container> */}
      </Container>
    </>
  );
};

export default Card;

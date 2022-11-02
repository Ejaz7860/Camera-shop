import React from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import '../styles/Button.css'
import {
  Button,
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  ButtonGroup
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTOCart } from "../redux/action/action";
const SingleProduct = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Header />
      <Container maxW={{ md: "800", sm: "550" }} h={100} mt={6}>
        <SimpleGrid
          shadow={"lg"}
          w="full"
          h={{ md: "400", sm: "600" }}
          columns={{ md: "2", sm: "1" }}
        >
          <Box>
            <Image
              objectFit={"cover"}
              w={"auto"}
              h={"full"}
              src={state.img}
              alt=""
            />
          </Box>
          <Box pl={{ md: "3", sm: "2" }}>
            <Heading letterSpacing={1} fontFamily={"monospace"} fontSize="xl">
              {state.title}
            </Heading>
            <Text mt={4} letterSpacing={1} fontSize={"12px"}>
              {state.desc}
            </Text>
            <Text mt="4" color={"darkcyan"}>
              vote {state.votes}
            </Text>
            <Text mt="4" color={"darkcyan"}>
              Price {state.price}
            </Text>

            <ButtonGroup mt='6' gap='1'>

            <button
              onClick={() => dispatch(addTOCart(state))}
             className='btn'
            >
              Add to Cart
            </button>
            <Link to={"/camera/cart/items"}>
              <Button
                colorScheme="black"
                rightIcon={<FaShoppingCart />}
                variant="outline"
              >
                Check cart
              </Button>
            </Link>
            </ButtonGroup>

         
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default SingleProduct;

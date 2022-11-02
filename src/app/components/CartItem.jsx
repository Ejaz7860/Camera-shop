import React from "react";
import { Box, Tooltip, HStack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import "../styles/Cart.css";
const CartItem = () => {
  const cartProduct = useSelector((state) => state.productReducer);

  return (
    <>
      <HStack mr={3}>
        <Tooltip label="Total Items" aria-label="A tooltip">
          <Box
            cursor={"pointer"}
            position={"relative"}
            display={"flex"}
            alignItems="center"
          >
            <FaShoppingCart style={{ color: "#ff0080" }} size={25} />
            {cartProduct.length ? (
              <span className="cart">{cartProduct.length}</span>
            ) : null}
          </Box>
        </Tooltip>
      </HStack>
    </>
  );
};

export default CartItem;

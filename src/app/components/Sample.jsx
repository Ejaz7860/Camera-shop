import React from "react";
import { Heading } from "@chakra-ui/react";
import Card from "../components/Card";

const Sample = () => {
  return (
    <div style={{ width: "100%" }}>
      <Heading fontFamily={"sans-serif"} textAlign={"center"}>
        React Redux Shopping Cart
      </Heading>
      <Card />
    </div>
  );
};

export default Sample;

import { Heading, HStack } from "@chakra-ui/react";
import "../styles/Header.css";
import Navigation from "./Navigation";
import { useState } from "react";

const Header = () => {
  const [data, setData] = useState("")
  return (
    <>
      <div className="Header">
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontWeight="extrabold"
          fontSize={{md:"2xl",sm:"xl"}}
        >
          Camera Shop
        </Heading>
        <HStack>
          <Navigation />
        </HStack>
      </div>
    </>
  );
};

export default Header;

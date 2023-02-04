import React from "react";
import Header from "../components/Header";
import { Heading, Button } from "@chakra-ui/react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails, returnVal } from "../redux/action/action";

const Dashboard = () => {
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.getProduct);
  // const data2 = useSelector((state) => state.returnVal);

  // console.log(data2);
  // useEffect(() => {
  //   //calling action here.
  //   console.log(`Get Product Action is dispacth`);
  //   dispatch(getProductDetails);
  // }, [dispatch]);

  const datae = {
    name: "Ejaz",
    age: 24,
  };
  const handleFunc = () => {
    dispatch(returnVal({ datae }));
  };
  return (
    <>
      <Header />
      <Heading textAlign={"center"} fontSize="2xl">
        Dashboard
      </Heading>
      <Button onClick={handleFunc}>Test</Button>
    </>
  );
};

export default Dashboard;

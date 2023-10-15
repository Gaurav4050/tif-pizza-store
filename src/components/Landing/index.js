import React from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import Pizza from "../../assets/pizza.png";
import RedShape from "../../assets/red-shape.png";
import Truck from "../../assets/truck.png";
import "./style.css";
const index = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      height="100%"
      className="main-container"
    >
      <Box
        boxSize={{ base: "100%", md: "55%" }}
        padding={{ base: "1rem", md: "2rem 5rem" }}
        display="flex"
        flexDirection="column"
        // justifyContent="center"
        // alignItems="center"
        order={{ base: 2, md: 1 }}
      >
        <Image
          src={Truck}
          alt="Truck"
          h="61px"
          w="80px"
          display={{ base: "none", md: "block" }}
        />
        <Box className="right-box">
          <Text className="landing-heading">
            Discover the<span style={{ color: "#E23744" }}> Best</span> Food and
            Drinks
          </Text>
          <Text className="sub-heading" marginTop="25px">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </Text>
          <button className="button-explore">Explore Now!</button>
        </Box>
      </Box>
      <Box
        boxSize={{ base: "100%", md: "45%" }}
        position="relative"
        order={{ base: 1, md: 2 }}
      >
        <Image src={Pizza} />
        <Image src={RedShape} alt="Red Shape" position="absolute" top="0" />
      </Box>
    </Flex>
  );
};

export default index;

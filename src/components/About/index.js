import React from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import About from "../../assets/about.png";
import "./style.css";
const index = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      height="100%"
      className="main-container2"
    >
      <Box
        boxSize={{ base: "100%", md: "50%" }}
        padding={{ base: "1rem", md: "2rem 5rem" }}
        display="flex"
        flexDirection="column"
        order={{ base: 2, md: 1 }}
      >
        <Box className="about-right-box">
          <Image
            src={About}
            alt="Truck"
            // h="61px"
            // w="80px"
            style={{
              objectFit: "scale-down",
              height: " 384px",
              width: "468px",
            }}
            display={{ base: "none", md: "block" }}
          />
        </Box>
      </Box>
      <Box
        boxSize={{ base: "100%", md: "50%" }}
        position="relative"
        order={{ base: 1, md: 2 }}
      >
        <Box className="about-left-box">
          <Text className="about-heading">About Us</Text>
          <Text className="about-sub-heading" marginTop="25px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </Text>
          <button className="button-explore">Read More</button>
        </Box>
      </Box>
    </Flex>
  );
};

export default index;

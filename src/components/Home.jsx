import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btcm.png";
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <Image w={"full"} h={"full"} objectFit={"contain"} src={btcSrc} />
      <Text
        fontSize={"5xl"}
        fontWeight={"bold"}
        color={"whiteAlpha.700"}
        mt={"-32"}
        textAlign={"center"}
      >
        My_CryptoTeller
      </Text>
    </Box>
  );
};

export default Home;

import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <Box
      bg="white"
      textAlign="center"
      ml={{ base: "3", md: "40" }}
      mb={20}
      mr={{ base: "3", md: "40" }}
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        mb={10}
        mt={{ base: "20", md: "40" }}
      >
        Checkout Some of Our{" "}
        <Text as="span" fontStyle="italic">
          Excellent Work{" "}
        </Text>
      </Text>
      <Flex
        justifyContent="center"
        flexWrap="wrap"
        gap={{ base: "5", md: "1" }}
      >
        <Box
          p={1}
          width={{ base: "100%", md: "30%" }}
          borderRadius="md"
          boxShadow="md"
        >
          <Image
            src="/work6.png"
            alt="Kitchen Design 1"
            width={600}
            height={200}
          />
        </Box>
        <Box
          p={1}
          width={{ base: "100%", md: "30%" }}
          borderRadius="md"
          boxShadow="md"
        >
          <Image
            src="/work5.png"
            alt="Kitchen Design 2"
            width={600}
            height={200}
          />
        </Box>
        <Box
          p={1}
          width={{ base: "100%", md: "30%" }}
          borderRadius="md"
          boxShadow="md"
        >
          <Image
            src="/work4.png"
            alt="Kitchen Design 3"
            width={600}
            height={200}
          />
        </Box>
      </Flex>
      <Flex
        justifyContent="center"
        flexWrap="wrap"
        gap={{ base: "5", md: "1" }}
        mt={{ base: "5", md: "1" }}
      >
        <Box
          p={1}
          width={{ base: "100%", md: "30%" }}
          borderRadius="md"
          boxShadow="md"
        >
          <Image
            src="/work1.png"
            alt="Kitchen Design 4"
            width={600}
            height={200}
          />
        </Box>
        <Box
          p={1}
          width={{ base: "100%", md: "30%" }}
          borderRadius="md"
          boxShadow="md"
        >
          <Image
            src="/work2.png"
            alt="Kitchen Design 5"
            width={600}
            height={200}
          />
        </Box>
        <Box
          p={1}
          width={{ base: "100%", md: "30%" }}
          borderRadius="md"
          boxShadow="md"
        >
          <Image
            src="/work3.png"
            alt="Kitchen Design 6"
            width={600}
            height={200}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Portfolio;
